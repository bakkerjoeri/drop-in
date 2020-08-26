import { getImageForFilePath } from 'heks';
import type { Position, Size } from 'heks';

interface FontMetrics {
	name: string;
	size: number;
	ascent: number;
	descent: number;
	char_count: number;
	kerning_count: number;
	chars: number[];
	advance: number[];
	offset_x: number[];
	offset_y: number[];
	width: number[];
	height: number[];
	pack_x: number[];
	pack_y: number[];
	kerning: number[];
}

type TextAlign = 'left' | 'center' | 'right' | 'start' | 'end';
type TextBaseline = 'top' | 'bottom' | 'middle' | 'alphabetic' | 'ideographic' | 'hanging';
type TextDirection = 'ltr' | 'rtl';

interface DrawTextOptions {
	color?: string;
	align?: TextAlign;
	baseline?: TextBaseline;
	direction?:  TextDirection;
}

export function drawTextWithCustomFont(
	context: CanvasRenderingContext2D,
	text: string,
	position: Position,
	fontAtlasPath: string,
	metrics: FontMetrics,
	{
		color = '#000000',
		align = 'start',
		baseline = 'alphabetic',
		direction = 'ltr',
	}: DrawTextOptions = {}
): void {
	const fontImage = getFontWithColor(fontAtlasPath, color);
	const lineHeight = metrics.size;
	const lines = makeRenderLines(text, metrics, direction, baseline);
	const biggestWidth = Math.max(...lines.map(line => line.width));

	lines.forEach((line, lineIndex) => {
		const lineOffset = {
			x: getHorizontalLineOffset(line.width, biggestWidth, align, direction),
			y: lineIndex * lineHeight,
		};

		line.characters.forEach(({positionInAtlas, positionInLine, sizeInAtlas}) => {
			context.drawImage(
				fontImage,
				positionInAtlas.x, positionInAtlas.y,
				sizeInAtlas.width, sizeInAtlas.height,
				Math.round(position.x + lineOffset.x + positionInLine.x),
				Math.round(position.y + lineOffset.y + positionInLine.y),
				sizeInAtlas.width,
				sizeInAtlas.height,
			);
		});
    });
}

const fontColorCache: {
	[path: string]: {
		[color: string]: HTMLCanvasElement;
	};
} = {};

function getFontWithColor(fontAtlasPath: string, color: string): HTMLCanvasElement {
	if (!fontColorCache.hasOwnProperty(fontAtlasPath)) {
		fontColorCache[fontAtlasPath] = {};
	}

	if (!fontColorCache[fontAtlasPath].hasOwnProperty(color)) {
		fontColorCache[fontAtlasPath][color] = document.createElement('canvas');

		const canvas = fontColorCache[fontAtlasPath][color];
		const context = canvas.getContext('2d');

		if (!context) {
			throw new Error('Could not create context for font canvas. Perhaps this browser does not support the Canvas API.');
		}

		const fontImage = getImageForFilePath(fontAtlasPath);

		fontImage.addEventListener('load', () => {
			context.drawImage(fontImage, 0, 0);
			context.globalCompositeOperation = 'source-in';
			context.fillStyle = color;
			context.fillRect(0, 0, canvas.width, canvas.height);
		});
	}

	return fontColorCache[fontAtlasPath][color];
};

interface Line {
	width: number;
	characters: Array<{
		positionInAtlas: Position;
		sizeInAtlas: Size;
		positionInLine: Position;
	}>
}

/**
 * To figure out the horizontal starting position of each line
 * we first need to find the width of each line.
 * 
 * Then, when rendering a specific line, its width is compared to the biggest width:
 * 
 * align === 'left'
 * align === 'start' && direction === 'ltr'
 * align === 'end' && direction === 'rtl'
 * Left offset from the origin is always zero.
 * 
 *       ------
 *       ---------
 *       ----
 * 
 * align === 'center'
 * Half the difference between line width and biggest line width determines the left offset,
 * and negatively offset each line by half of the biggest width.
 * 
 *     ----
 *   --------
 *      --
 * 
 * align === 'right'
 * align === 'start' && direction === 'rtl'
 * align === 'end' && direction === 'ltr'
 * Because the line origin starts on the right, each line needs to be offset by its own width.
 * 
 * ------
 *   ----
 *  -----
 * 
 * So we need to precalculate each line's width, and store it to determine the relative starting position
 * of each line during the actual rendering.
 * We can use that precalculation to also determine each character's horizontal position on its line.
 */
function makeRenderLines(text: string, metrics: FontMetrics, direction: TextDirection, baseline: TextBaseline): Line[] {
	const directionFactorMap: { [Direction in TextDirection]: number } = {
		ltr: 1,
		rtl: -1,
	};

	const directionFactor = directionFactorMap[direction];
	const lineParts = text.split("\n");

	return lineParts.map(linePart => {
		let horizontalOffset = 0;

		return Array.from(linePart).reduce((line, character) => {
			const asciiCode = character.charCodeAt(0);
			const indexInAtlas = metrics.chars.indexOf(asciiCode);
			const advance = metrics.advance[indexInAtlas];

			if (asciiCode === 32) {
				horizontalOffset = horizontalOffset + (advance * directionFactor) + (1 * directionFactor);

				return {
					...line,
					width: line.width + advance + 1,
				};
			}

			const positionInAtlas = {
				x: metrics.pack_x[indexInAtlas],
				y: metrics.pack_y[indexInAtlas],
			};

			const sizeInAtlas = {
				width: metrics.width[indexInAtlas],
				height: metrics.height[indexInAtlas],
			};

			const offsetInAtlas = {
				x: metrics.offset_x[indexInAtlas],
				y: metrics.offset_y[indexInAtlas],
			};

			const positionInLine = {
				x: horizontalOffset + (offsetInAtlas.x * directionFactor),
				y: offsetInAtlas.y + getVerticalOffsetForBaseline(metrics, baseline),
			};

			horizontalOffset = horizontalOffset + (advance * directionFactor) + (1 * directionFactor);

			return {
				...line,
				width: line.width + advance + 1,
				characters: [
					...line.characters,
					{
						positionInAtlas,
						sizeInAtlas,
						positionInLine,
					}
				]
			};
			
		}, { width: 0, characters: [] } as Line);
	});
}

function getHorizontalLineOffset(lineWidth: number, biggestWidth: number, align: TextAlign, direction: TextDirection) {
	if (align === 'center') {
		return ((biggestWidth - lineWidth) / 2) - (biggestWidth / 2);
	}

	if (
		align === 'right' ||
		(align === 'start' && direction === 'rtl') ||
		(align === 'end' && direction === 'ltr')
	) {
		return -lineWidth;
	}

	return 0;
}

function getVerticalOffsetForBaseline(metrics: FontMetrics, baseline: TextBaseline) {
	if (baseline === 'top') {
		return metrics.ascent;
	}

	if (baseline === 'hanging') {
		return metrics.ascent + metrics.descent;
	}

	if (baseline === 'middle') {
		return (metrics.ascent + metrics.descent) / 2;
	}

	if (baseline === 'bottom') {
		return metrics.descent;
	}

	return 0;
}