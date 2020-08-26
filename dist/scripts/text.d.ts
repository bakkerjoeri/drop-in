import type { Position } from 'heks';
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
declare type TextAlign = 'left' | 'center' | 'right' | 'start' | 'end';
declare type TextBaseline = 'top' | 'bottom' | 'middle' | 'alphabetic' | 'ideographic' | 'hanging';
declare type TextDirection = 'ltr' | 'rtl';
interface DrawTextOptions {
    color?: string;
    align?: TextAlign;
    baseline?: TextBaseline;
    direction?: TextDirection;
}
export declare function drawTextWithCustomFont(context: CanvasRenderingContext2D, text: string, position: Position, fontAtlasPath: string, metrics: FontMetrics, { color, align, baseline, direction, }?: DrawTextOptions): void;
export {};
