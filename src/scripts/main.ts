import {
    Game, Size, EventEmitter, addEntity, GameState, findEntity, getEntities, setEntities, addSprite, importSpriteSheet, drawSprite, getSprite
} from 'heks';
import { pipe } from '@bakkerjoeri/fp';
import { createGameBoard, GameBoard, TileMap } from './gameboard';
import { DropInEvents } from './events';
import Keyboard from './keyboard';
import spriteSheet from '../assets/sprites/sprites';

const scale = 4;
const gameSize: Size = {
    width: 320,
    height: 180,
};

const boardOrigin = {
    x: 40,
    y: 40,
}

const tileSize = {
    width: 16,
    height: 16,
}

/**
 * Game parameters
 */
const boardSize = {
    width: 8,
    height: 6,
}

const connectHowMany = 4;

const eventEmitter = new EventEmitter<DropInEvents>();
const game = new Game(gameSize, eventEmitter, { scale, containerSelector: '.game' });
new Keyboard(eventEmitter);

eventEmitter.on('start', (state: GameState): GameState => {
    return pipe(
        importSpriteSheet(spriteSheet),
        addEntity(createGameBoard(boardSize.width, boardSize.height)),
    )(state);
});

eventEmitter.on('keyUp', (state: GameState, { key }, { emit }): GameState => {
    const keyAsInteger = parseInt(key);
    const isNumericKey = typeof keyAsInteger === 'number' && !isNaN(keyAsInteger);

    if (!isNumericKey || !(keyAsInteger >= 1 && keyAsInteger <= boardSize.width)) {
        return state;
    }

    const gameBoard = findEntity(getEntities(state), { isGameBoard: true }) as GameBoard;

    if (!gameBoard) {
        return state;
    }
    const columnIndex = keyAsInteger - 1;
    const column = gameBoard.tiles[columnIndex];

    // The cell that will receive the tile is the one before the first filled cell
    let indexOfFirstFullCell = 0;
    let cellToInspect = column[indexOfFirstFullCell];
    while(cellToInspect === null && indexOfFirstFullCell <= column.length - 1) {
        indexOfFirstFullCell += 1;
        cellToInspect = column[indexOfFirstFullCell];
    }

    if (indexOfFirstFullCell === 0) {
        return state;
    }
    
    gameBoard.tiles[columnIndex][indexOfFirstFullCell - 1] = gameBoard.currentPlayer;
    state = setEntities(gameBoard)(state);
    
    return emit('endTurn', state, {});
});

eventEmitter.on('endTurn', (state: GameState): GameState => {
    const gameBoard = findEntity(getEntities(state), { isGameBoard: true }) as GameBoard;

    if (!gameBoard) {
        return state;
    }

    const winner = findWinner(gameBoard.tiles, connectHowMany);

    if (winner) {
        alert(`The winner is... ${winner}`);
    }

    gameBoard.currentPlayer = gameBoard.currentPlayer === 'red' ? 'yellow' : 'red';
    return setEntities(gameBoard)(state);
});

function findWinner(tiles: TileMap, chainLength = 4): string | null {
    for (let columnIndex = 0; columnIndex < tiles.length; columnIndex += 1) { // iterate columns, left to right
        for (let rowIndex = 0; rowIndex < tiles[columnIndex].length; rowIndex += 1) { // iterate rows, top to bottom
            const playerOccupyingCell = tiles[columnIndex][rowIndex];
            
            if (playerOccupyingCell === null) {
                continue; // don't check empty slots
            }
            
            const chain = [...new Array(chainLength).keys()];

            // Look east
            if (chain.every(chainIndex => {
                return tiles[columnIndex]
                    && tiles[columnIndex][rowIndex + chainIndex] === playerOccupyingCell
            })) {
                return playerOccupyingCell;
            }
            
            // Look north
            if (chain.every(chainIndex => {
                return tiles[columnIndex + chainIndex]
                    && tiles[columnIndex + chainIndex][rowIndex] === playerOccupyingCell
            })) {
                return playerOccupyingCell;
            }

            // Look northeast
            if (chain.every(chainIndex => {
                return tiles[columnIndex + chainIndex]
                    && tiles[columnIndex + chainIndex][rowIndex + chainIndex] === playerOccupyingCell
            })) {
                return playerOccupyingCell;
            }

            // Look southeast
            if (chain.every(chainIndex => {
                return tiles[columnIndex + chainIndex]
                    && tiles[columnIndex + chainIndex][rowIndex - chainIndex] === playerOccupyingCell
            })) {
                return playerOccupyingCell;
            }
        }
    }

    return null;
}

eventEmitter.on('draw', (state: GameState, { context }): GameState => {
    const gameBoard = findEntity(getEntities(state), { isGameBoard: true }) as GameBoard;

    if (!gameBoard) {
        return state;
    }

    context.clearRect(0, 0, gameSize.width * scale, gameSize.height * scale);
    context.fillStyle = '#D7D0FF';
    context.fillRect(0, 0, gameSize.width * scale, gameSize.height * scale);

    drawBoardBack(gameBoard, context, state);
    drawCoinsInBoard(gameBoard, context, state);
    drawBoardFront(gameBoard, context, state);

    return state;
});

function drawCoinsInBoard(gameBoard: GameBoard, context: CanvasRenderingContext2D, state: GameState) {
    gameBoard.tiles.forEach((row, rowIndex) => {
        row.forEach((cell, columnIndex) => {
            const coinOrigin = {
                x: boardOrigin.x + rowIndex * tileSize.width,
                y: boardOrigin.y + columnIndex * tileSize.height,
            }

            if (cell !== null) {
                drawSprite(
                    getSprite(state, cell === 'red' ? 'coin-red' : 'coin-blue'),
                    context,
                    coinOrigin,
                    0,
                    { scale },
                );
            }
        });
    });
}

function drawBoardBack(gameBoard: GameBoard, context: CanvasRenderingContext2D, state: GameState) {
    gameBoard.tiles.forEach((row, rowIndex) => {
        row.forEach((cell, columnIndex) => {
            const cellOrigin = {
                x: boardOrigin.x + rowIndex * tileSize.width,
                y: boardOrigin.y + columnIndex * tileSize.height,
            }

            drawSprite(
                getSprite(state, 'board-position-back'),
                context,
                cellOrigin,
                0,
                { scale },
            );

            if (columnIndex === 0) {
                drawSprite(
                    getSprite(state, 'board-column-top-front'),
                    context,
                    { x: cellOrigin.x, y: cellOrigin.y - 8 },
                    0,
                    { scale },
                );
            }

            if (columnIndex === row.length - 1) {
                drawSprite(
                    getSprite(state, 'board-column-bottom-front'),
                    context,
                    { x: cellOrigin.x, y: cellOrigin.y + tileSize.height },
                    0,
                    { scale },
                );
            }

            if (rowIndex === 0) {
                drawSprite(
                    getSprite(state, 'board-row-left-front'),
                    context,
                    { x: cellOrigin.x - 8, y: cellOrigin.y },
                    0,
                    { scale },
                );
            }

            if (rowIndex === gameBoard.tiles.length - 1) {
                drawSprite(
                    getSprite(state, 'board-row-right-front'),
                    context,
                    { x: cellOrigin.x + tileSize.width, y: cellOrigin.y },
                    0,
                    { scale },
                );
            }

            if (rowIndex === 0 && columnIndex === 0) {
                drawSprite(
                    getSprite(state, 'board-corner-top-left-front'),
                    context,
                    { x: cellOrigin.x - 8, y: cellOrigin.y - 8 },
                    0,
                    { scale },
                );
            }

            if (rowIndex === gameBoard.tiles.length - 1 && columnIndex === 0) {
                drawSprite(
                    getSprite(state, 'board-corner-top-right-front'),
                    context,
                    { x: cellOrigin.x + tileSize.width, y: cellOrigin.y - 8 },
                    0,
                    { scale },
                );
            }

            if (rowIndex === gameBoard.tiles.length - 1 && columnIndex === row.length - 1) {
                drawSprite(
                    getSprite(state, 'board-corner-bottom-right-front'),
                    context,
                    { x: cellOrigin.x + tileSize.width, y: cellOrigin.y + tileSize.height },
                    0,
                    { scale },
                );
            }

            if (rowIndex === 0 && columnIndex === row.length - 1) {
                drawSprite(
                    getSprite(state, 'board-corner-bottom-left-front'),
                    context,
                    { x: cellOrigin.x - 8, y: cellOrigin.y + tileSize.height },
                    0,
                    { scale },
                );
            }
        });
    });
}

function drawBoardFront(gameBoard: GameBoard, context: CanvasRenderingContext2D, state: GameState) {
    gameBoard.tiles.forEach((row, rowIndex) => {
        row.forEach((cell, columnIndex) => {
            const cellOrigin = {
                x: boardOrigin.x + rowIndex * tileSize.width,
                y: boardOrigin.y + columnIndex * tileSize.height,
            }

            drawSprite(
                getSprite(state, 'board-position-front'),
                context,
                cellOrigin,
                0,
                { scale },
            );

            if (columnIndex === 0) {
                drawSprite(
                    getSprite(state, 'board-column-top-back'),
                    context,
                    { x: cellOrigin.x, y: cellOrigin.y - 8 },
                    0,
                    { scale },
                );
            }

            if (rowIndex === 0 && columnIndex === 0) {
                drawSprite(
                    getSprite(state, 'board-corner-top-left-back'),
                    context,
                    { x: cellOrigin.x - 8, y: cellOrigin.y - 8 },
                    0,
                    { scale },
                );
            }

            if (rowIndex === gameBoard.tiles.length - 1 && columnIndex === 0) {
                drawSprite(
                    getSprite(state, 'board-corner-top-right-back'),
                    context,
                    { x: cellOrigin.x + tileSize.width, y: cellOrigin.y - 8 },
                    0,
                    { scale },
                );
            }
        });
    });
}






game.start();