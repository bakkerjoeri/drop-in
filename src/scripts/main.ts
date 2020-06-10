import {
    Game, Size, EventEmitter, addEntity, GameState, findEntity, getEntities, setEntities, importSpriteSheet, drawSprite, getSprite, defaultState, DrawEvent
} from 'heks';
import { pipe } from '@bakkerjoeri/fp';
import { createGameBoard, GameBoard, TileMap } from './gameboard';
import { DropInEvents } from './events';
import Keyboard from './keyboard';
import spriteSheet from '../assets/sprites/sprites';
import { choose } from 'roll-the-bones';
import pick from './utilities/pick';

export type Player = 'red' | 'blue' | 'yellow' | 'green' | 'purple' | 'white' | 'black';

interface State extends GameState {
    game: {
        phase: 'settingUpGame' | 'playingRound';
    };
    setup: {
        boardWidth: number;
        boardHeight: number;
        amountOfPlayers: number;
        connectToWin: number;
    },
    round: {
        phase: 'start' | 'startTurn' | 'decideMove' | 'endTurn' | 'end';
        boardSize: Size;
        positionToPlacePiece: number;
        connectToWin: number;
        players: Player[];
        currentPlayer: Player | null;
        winner: Player | null;
    };
}

const gameSize: Size = {
    width: 320,
    height: 180,
};

const tileSize = {
    width: 16,
    height: 16,
};

/**
 * Game parameters
 */
const boardSize = {
    width: 8,
    height: 6,
};

const boardOrigin = {
    x: (gameSize.width / 2) - ((boardSize.width / 2) * tileSize.width),
    y: 40,
};

const connectToWin = 4;
const amountOfPlayers = 2;

const eventEmitter = new EventEmitter<DropInEvents>();
const game = new Game<State>(gameSize, eventEmitter, {
    initialState: {
        ...defaultState,
        game: {
            phase: 'playingRound',
        },
        setup: {
            boardWidth: 7,
            boardHeight: 6,
            amountOfPlayers: 2,
            connectToWin: 4,
        },
        round: {
            phase: 'start',
            boardSize: boardSize,
            connectToWin,
            players: pick(['red', 'blue', 'yellow', 'green', 'purple', 'white', 'black'], amountOfPlayers),
            currentPlayer: null,
            positionToPlacePiece: Math.floor((boardSize.width - 1) / 2),
            winner: null,
        },

    },
    containerSelector: '.game',
});
new Keyboard(eventEmitter);

eventEmitter.on('start', (state: State): State => {
    return pipe(
        importSpriteSheet(spriteSheet),
        addEntity(createGameBoard(state.round.boardSize.width, state.round.boardSize.height)),
    )(state);
});

eventEmitter.on('update', (state: State): State => {
    if (state.game.phase === 'settingUpGame') {
        return updateSetupGame(state);
    }

    if (state.game.phase === 'playingRound') {
        return updatePlayingRound(state);
    }

    return state;
});

function updateSetupGame(state: State): State {
    return state;
}

function updatePlayingRound(state: State): State {
    if (state.round.phase === 'start') {
        return updateRoundStart(state);
    }

    if (state.round.phase === 'startTurn') {
        return updateRoundStartTurn(state);
    }

    if (state.round.phase === 'endTurn') {
        return updateRoundEndTurn(state);
    }

    return state;
}

function updateRoundStart(state: State): State {
    state.round.currentPlayer = choose(state.round.players);
    state.round.phase = 'startTurn';

    return state;
}

function updateRoundStartTurn(state: State): State {
    state.round.phase = 'decideMove';
    
    return state;
}

function updateRoundEndTurn(state: State): State {
    const gameBoard = findEntity(getEntities(state), { isGameBoard: true }) as GameBoard;
    const winner = findWinner(gameBoard.tiles, state.round.connectToWin);

    if (winner) {
        return {
            ...state,
            round: {
                ...state.round,
                winner: winner,
                phase: 'end',
            },
        };
    }

    const currentPlayer = state.round.currentPlayer as Player;
    const currentPlayerIndex = state.round.players.indexOf(currentPlayer)
    const nextPlayerIndex = (currentPlayerIndex + 1) % state.round.players.length;
    const nextPlayer = state.round.players[nextPlayerIndex];

    return {
        ...state,
        round: {
            ...state.round,
            currentPlayer: nextPlayer,
            phase: 'startTurn',
        },
    }
}

function findWinner(tiles: TileMap, chainLength = 4): Player | null {
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

eventEmitter.on('keyPressed', (state: State, { key }, { emit }): State => {
    if (state.round.phase !== 'decideMove') {
        return state;
    }

    const keyAsInteger = parseInt(key);
    const isNumericKey = typeof keyAsInteger === 'number' && !isNaN(keyAsInteger);

    if (!isNumericKey || !(keyAsInteger >= 1 && keyAsInteger <= state.round.boardSize.width)) {
        return state;
    }

    const gameBoard = findEntity(getEntities(state), { isGameBoard: true }) as GameBoard;
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
    
    gameBoard.tiles[columnIndex][indexOfFirstFullCell - 1] = state.round.currentPlayer;
    
    return {
        ...state,
        ...setEntities(gameBoard)(state),
        round: {
            ...state.round,
            phase: 'endTurn',
        },
    };
});

eventEmitter.on('keyPressed', (state: State, { key }, { emit }): State => {
    if (state.round.phase !== 'decideMove') {
        return state;
    }

    if (key === 'arrowright' || key === 'd') {
        state.round.positionToPlacePiece = Math.min(state.round.boardSize.width - 1, state.round.positionToPlacePiece + 1);
    }

    if (key === 'arrowleft' || key === 'a') {
        state.round.positionToPlacePiece = Math.max(0, state.round.positionToPlacePiece - 1);
    }

    return state;
});

eventEmitter.on('keyPressed', (state: State, { key }, { emit }): State => {
    if (state.round.phase !== 'decideMove') {
        return state;
    }

    if (key === 'arrowdown' || key === 's') {
        const gameBoard = findEntity(getEntities(state), { isGameBoard: true }) as GameBoard;
        const columnIndex = state.round.positionToPlacePiece;
        const column = gameBoard.tiles[state.round.positionToPlacePiece];

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
        
        gameBoard.tiles[columnIndex][indexOfFirstFullCell - 1] = state.round.currentPlayer;
        
        return {
            ...state,
            ...setEntities(gameBoard)(state),
            round: {
                ...state.round,
                phase: 'endTurn',
            },
        };
    }

    return state;
});

eventEmitter.on('draw', (state: State, { context }): State => {
    context.clearRect(0, 0, gameSize.width, gameSize.height);
    context.fillStyle = '#D7D0FF';
    context.fillRect(0, 0, gameSize.width, gameSize.height);

    return state;
});

eventEmitter.on('draw', (state: State, drawEvent: DrawEvent): State => {
    if (state.game.phase === 'playingRound') {
        drawPlayingRound(state, drawEvent);
    }

    return state;
});

function drawPlayingRound(state: State, drawEvent: DrawEvent): void {
    const gameBoard = findEntity(getEntities(state), { isGameBoard: true }) as GameBoard;

    drawBoardBack(gameBoard, drawEvent.context, state);
    drawCoinsInBoard(gameBoard, drawEvent.context, state);
    drawBoardFront(gameBoard, drawEvent.context, state);

    if (state.round.phase === 'decideMove') {
        drawRoundDecidingMove(state, drawEvent);
    }

    if (state.round.phase === 'end' && state.round.winner) {
        drawRoundEnd(state, drawEvent);
    }
}

function drawRoundDecidingMove(state: State, { context }: DrawEvent): void {
    drawSprite(
        getSprite(state, `coin-${state.round.currentPlayer}`),
        context,
        {
            x: boardOrigin.x + (state.round.positionToPlacePiece * tileSize.width),
            y: boardOrigin.y - Math.floor(1.5 * tileSize.height),
        }
    );
}

function drawRoundEnd(state: State, { context }: DrawEvent): void {
    drawSprite(
        getSprite(state, `coin-${state.round.winner}`),
        context,
        {
            x: (gameSize.width / 2) - (tileSize.width / 2),
            y: 4
        }
    );
    context.fillStyle = '#000000';
    context.font = '10px BirdSeed-Regular';
    context.fillText('wins!', (gameSize.width / 2) - 12, 28);
}

function drawCoinsInBoard(gameBoard: GameBoard, context: CanvasRenderingContext2D, state: State) {
    gameBoard.tiles.forEach((row, rowIndex) => {
        row.forEach((cell, columnIndex) => {
            const coinOrigin = {
                x: boardOrigin.x + rowIndex * tileSize.width,
                y: boardOrigin.y + columnIndex * tileSize.height,
            }

            if (cell !== null) {
                drawSprite(
                    getSprite(state, `coin-${cell}`),
                    context,
                    coinOrigin,
                );
            }
        });
    });
}

function drawBoardBack(gameBoard: GameBoard, context: CanvasRenderingContext2D, state: State) {
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
            );

            if (columnIndex === 0) {
                drawSprite(
                    getSprite(state, 'board-column-top-front'),
                    context,
                    { x: cellOrigin.x, y: cellOrigin.y - 8 },
                );
            }

            if (columnIndex === row.length - 1) {
                drawSprite(
                    getSprite(state, 'board-column-bottom-front'),
                    context,
                    { x: cellOrigin.x, y: cellOrigin.y + tileSize.height },
                );
            }

            if (rowIndex === 0) {
                drawSprite(
                    getSprite(state, 'board-row-left-front'),
                    context,
                    { x: cellOrigin.x - 8, y: cellOrigin.y },
                );
            }

            if (rowIndex === gameBoard.tiles.length - 1) {
                drawSprite(
                    getSprite(state, 'board-row-right-front'),
                    context,
                    { x: cellOrigin.x + tileSize.width, y: cellOrigin.y },
                );
            }

            if (rowIndex === 0 && columnIndex === 0) {
                drawSprite(
                    getSprite(state, 'board-corner-top-left-front'),
                    context,
                    { x: cellOrigin.x - 8, y: cellOrigin.y - 8 },
                );
            }

            if (rowIndex === gameBoard.tiles.length - 1 && columnIndex === 0) {
                drawSprite(
                    getSprite(state, 'board-corner-top-right-front'),
                    context,
                    { x: cellOrigin.x + tileSize.width, y: cellOrigin.y - 8 },
                );
            }

            if (rowIndex === gameBoard.tiles.length - 1 && columnIndex === row.length - 1) {
                drawSprite(
                    getSprite(state, 'board-corner-bottom-right-front'),
                    context,
                    { x: cellOrigin.x + tileSize.width, y: cellOrigin.y + tileSize.height },
                );
            }

            if (rowIndex === 0 && columnIndex === row.length - 1) {
                drawSprite(
                    getSprite(state, 'board-corner-bottom-left-front'),
                    context,
                    { x: cellOrigin.x - 8, y: cellOrigin.y + tileSize.height },
                );
            }
        });
    });
}

function drawBoardFront(gameBoard: GameBoard, context: CanvasRenderingContext2D, state: State) {
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
            );

            if (columnIndex === 0) {
                drawSprite(
                    getSprite(state, 'board-column-top-back'),
                    context,
                    { x: cellOrigin.x, y: cellOrigin.y - 8 },
                );
            }

            if (rowIndex === 0 && columnIndex === 0) {
                drawSprite(
                    getSprite(state, 'board-corner-top-left-back'),
                    context,
                    { x: cellOrigin.x - 8, y: cellOrigin.y - 8 },
                );
            }

            if (rowIndex === gameBoard.tiles.length - 1 && columnIndex === 0) {
                drawSprite(
                    getSprite(state, 'board-corner-top-right-back'),
                    context,
                    { x: cellOrigin.x + tileSize.width, y: cellOrigin.y - 8 },
                );
            }
        });
    });
}

game.start();