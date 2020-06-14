import {
    Game, Size, Position, EventEmitter, GameState, setSprites, drawSprite, getSprite, defaultState, DrawEvent
} from 'heks';
import { createGameBoard, GameBoard, TileMap } from './gameboard';
import { DropInEvents } from './events';
import Keyboard from './keyboard';
import spriteSheet from '../assets/sprites/sprites';
import { choose, pick } from 'roll-the-bones';

export type Player = 'red' | 'blue' | 'yellow' | 'green' | 'purple' | 'white' | 'black';
type GamePhase = 'settingUpGame' | 'playingRound';
type RoundPhase = 'start' | 'startTurn' | 'decideMove' | 'endTurn' | 'end';
type SetupSteps = 'boardHeight' | 'boardWidth' | 'amountOfPlayers' | 'connectToWin' | 'startRound';

interface State extends GameState {
    game: {
        isPhaseNew: boolean;
        phase: GamePhase | null;
        nextPhase: GamePhase | null;
    };
    setup: {
        boardWidth: number;
        boardHeight: number;
        amountOfPlayers: number;
        connectToWin: number;
        currentlySelectedStep: SetupSteps;
    },
    round: {
        isPhaseNew: boolean;
        phase: RoundPhase | null;
        nextPhase: RoundPhase | null;
        gameBoard: GameBoard | null;
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

const defaultBoardSize = {
    width: 8,
    height: 6,
};

const defaultConnectToWin = 4;

const setupSteps: SetupSteps[] = [
    'boardHeight',
    'boardWidth',
    'amountOfPlayers',
    'connectToWin',
    'startRound',
]

const allPlayers: Player[] = [
    'red',
    'blue',
    'yellow',
    'green',
    'purple',
    'white',
    'black',
];

const boardHeightMin = 4;
const boardHeightMax = 8;
const boardWidthMin = 2;
const boardWidthMax = 18;
const amountOfPlayersMin = 2;
const amountOfPlayersMax = 7;
const connectToWinMin = 3;
const connectToWinMax = 8;

const eventEmitter = new EventEmitter<DropInEvents>();
const game = new Game<State>(gameSize, eventEmitter, {
    initialState: {
        ...defaultState,
        game: {
            isPhaseNew: true,
            phase: null,
            nextPhase: 'settingUpGame',
        },
        setup: {
            boardWidth: defaultBoardSize.width,
            boardHeight: defaultBoardSize.height,
            amountOfPlayers: 2,
            connectToWin: 4,
            currentlySelectedStep: setupSteps[0],
        },
        round: {
            isPhaseNew: true,
            phase: null,
            nextPhase: 'start',
            gameBoard: null,
            boardSize: defaultBoardSize,
            connectToWin: defaultConnectToWin,
            players: [],
            currentPlayer: null,
            positionToPlacePiece: 0,
            winner: null,
        },

    },
    containerSelector: '.game',
});
new Keyboard(eventEmitter);

eventEmitter.on('start', (state: State): State => {
    return setSprites(spriteSheet)(state);
});

eventEmitter.on('beforeUpdate', (state: State): State => {
    if (state.game.nextPhase !== null) {
        state.game.phase = state.game.nextPhase;
        state.game.nextPhase = null;
        state.game.isPhaseNew = true;
    } else {
        state.game.isPhaseNew = false;
    }

    if (state.round.nextPhase !== null) {
        state.round.phase = state.round.nextPhase;
        state.round.nextPhase = null;
        state.round.isPhaseNew = true;
    } else {
        state.round.isPhaseNew = false;
    }

    return state;
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
    if (state.game.isPhaseNew) {
        state.setup.currentlySelectedStep = setupSteps[0];
        return state;
    }

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
    state.round.gameBoard = createGameBoard(
        state.round.boardSize.width,
        state.round.boardSize.height
    );
    state.round.currentPlayer = choose(state.round.players);
    state.round.positionToPlacePiece = Math.floor((state.round.boardSize.width - 1) / 2);
    state.round.nextPhase = 'startTurn';

    return state;
}

function updateRoundStartTurn(state: State): State {
    state.round.nextPhase = 'decideMove';
    
    return state;
}

function updateRoundEndTurn(state: State): State {
    const gameBoard = state.round.gameBoard as GameBoard;
    const winner = findWinner(gameBoard.tiles, state.round.connectToWin);

    if (winner) {
        return {
            ...state,
            round: {
                ...state.round,
                winner: winner,
                nextPhase: 'end',
            },
        };
    }

    if (isGameBoardFull(gameBoard.tiles)) {
        return {
            ...state,
            round: {
                ...state.round,
                nextPhase: 'end',
            },
        };
    }

    const currentPlayer = state.round.currentPlayer as Player;
    const currentPlayerIndex = state.round.players.indexOf(currentPlayer)
    const nextPlayerIndex = moveThroughLoop(currentPlayerIndex, state.round.players.length);
    const nextPlayer = state.round.players[nextPlayerIndex];

    return {
        ...state,
        round: {
            ...state.round,
            currentPlayer: nextPlayer,
            nextPhase: 'startTurn',
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

function isGameBoardFull(tiles: TileMap): boolean {
    return tiles.every(column => {
        return column.every(cell => cell !== null);
    });
}

eventEmitter.on('keyPressed', (state: State, { key }, { emit }): State => {
    if (state.game.phase !== 'playingRound' || state.round.phase !== 'decideMove') {
        return state;
    }

    const keyAsInteger = parseInt(key);
    const isNumericKey = typeof keyAsInteger === 'number' && !isNaN(keyAsInteger);

    if (!isNumericKey || !(keyAsInteger >= 1 && keyAsInteger <= state.round.boardSize.width)) {
        return state;
    }

    const gameBoard = state.round.gameBoard as GameBoard;
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
        round: {
            ...state.round,
            gameBoard,
            nextPhase: 'endTurn',
        },
    };
});

eventEmitter.on('keyPressed', (state: State, { key }, { emit }): State => {
    if (state.game.phase !== 'playingRound' || state.round.phase !== 'decideMove') {
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
    if (state.game.phase !== 'playingRound' || state.round.phase !== 'decideMove') {
        return state;
    }

    if (key === 'arrowdown' || key === 's') {
        const gameBoard = state.round.gameBoard as GameBoard;
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
            round: {
                ...state.round,
                gameBoard,
                nextPhase: 'endTurn',
            },
        };
    }

    return state;
});

eventEmitter.on('keyPressed', (state: State, { key }): State => {
    if (state.game.phase !== 'settingUpGame') {
        return state;
    }

    const currentlySelectedStepIndex = setupSteps.indexOf(state.setup.currentlySelectedStep);

    if (key === 'arrowup' || key === 'w') {
        const nextSelectedStepIndex = moveThroughLoop(currentlySelectedStepIndex, setupSteps.length, -1);
        state.setup.currentlySelectedStep = setupSteps[nextSelectedStepIndex];
    }

    if (key === 'arrowright' || key === 'd') {
        if (state.setup.currentlySelectedStep === 'amountOfPlayers') {
            state.setup.amountOfPlayers = Math.min(amountOfPlayersMax, state.setup.amountOfPlayers + 1);
        }

        if (state.setup.currentlySelectedStep === 'boardWidth') {
            state.setup.boardWidth = Math.min(boardWidthMax, state.setup.boardWidth + 1);
        }

        if (state.setup.currentlySelectedStep === 'boardHeight') {
            state.setup.boardHeight = Math.min(boardHeightMax, state.setup.boardHeight + 1);
        }

        if (state.setup.currentlySelectedStep === 'connectToWin') {
            state.setup.connectToWin = Math.min(connectToWinMax, state.setup.connectToWin + 1);
        }
    }

    if (key === 'arrowdown' || key === 's') {
        const nextSelectedStepIndex = moveThroughLoop(currentlySelectedStepIndex, setupSteps.length, 1);
        state.setup.currentlySelectedStep = setupSteps[nextSelectedStepIndex];
    }

    if (key === 'arrowleft' || key === 'a') {
        if (state.setup.currentlySelectedStep === 'amountOfPlayers') {
            state.setup.amountOfPlayers = Math.max(amountOfPlayersMin, state.setup.amountOfPlayers - 1);
        }

        if (state.setup.currentlySelectedStep === 'boardWidth') {
            state.setup.boardWidth = Math.max(boardWidthMin, state.setup.boardWidth - 1);
        }

        if (state.setup.currentlySelectedStep === 'boardHeight') {
            state.setup.boardHeight = Math.max(boardHeightMin, state.setup.boardHeight - 1);
        }

        if (state.setup.currentlySelectedStep === 'connectToWin') {
            state.setup.connectToWin = Math.max(connectToWinMin, state.setup.connectToWin - 1);
        }
    }

    if (key === 'enter' && state.setup.currentlySelectedStep === 'startRound') {
        state.game.nextPhase = 'playingRound';
        state.round.nextPhase = 'start';
        
        state.round = {
            ...state.round,
            boardSize: {
                width: state.setup.boardWidth,
                height: state.setup.boardHeight,
            },
            players: pick(allPlayers, state.setup.amountOfPlayers),
            connectToWin: state.setup.connectToWin,
        }

        return state;
    }

    return state;
});

eventEmitter.on('keyPressed', (state: State, { key }): State => {
    if (state.game.phase !== 'playingRound' || state.round.phase !== 'end') {
        return state;
    }

    if (key === 'r') {
        state.round.nextPhase = 'start';

        return state;
    }

    if (key === 'q') {
        state.game.nextPhase = 'settingUpGame';

        return state;
    }

    return state;
});

function moveThroughLoop(current: number, total: number, step: number = 1) {
    return ((current + step) % total + total) % total;
}

eventEmitter.on('draw', (state: State, { context }): State => {
    context.clearRect(0, 0, gameSize.width, gameSize.height);
    context.fillStyle = '#D7D0FF';
    context.fillRect(0, 0, gameSize.width, gameSize.height);

    return state;
});

eventEmitter.on('draw', (state: State, drawEvent: DrawEvent): State => {
    if (state.game.phase === 'settingUpGame') {
        drawSettingUpGame(state, drawEvent);
    }

    if (state.game.phase === 'playingRound') {
        drawPlayingRound(state, drawEvent);
    }

    return state;
});

function drawSettingUpGame(state: State, { context }: DrawEvent): void {
    drawText('Set up a new game', { x: (gameSize.width / 2) + 0.5, y: 28 }, context, 'center');
    drawText('Board', { x: 150, y: 68 }, context, 'right');
    drawText(`${state.setup.boardHeight} rows`, { x: 172, y: 68 }, context);
    
    if (state.setup.currentlySelectedStep === 'boardHeight') {
        if (state.setup.boardHeight > boardHeightMin) {
            drawSprite(getSprite(state, 'arrow-left'), context, { x: 160, y: 68 });
        }

        if (state.setup.boardHeight < boardHeightMax) {
            drawSprite(getSprite(state, 'arrow-right'), context, { x: 230, y: 68 });
        }
    }

    drawText(`${state.setup.boardWidth} columns`, { x: 172, y: 78 }, context);

    if (state.setup.currentlySelectedStep === 'boardWidth') {
        if (state.setup.boardWidth > boardWidthMin) {
            drawSprite(getSprite(state, 'arrow-left'), context, { x: 160, y: 78 });
        }

        if (state.setup.boardWidth < boardWidthMax) {
            drawSprite(getSprite(state, 'arrow-right'), context, { x: 230, y: 78 });
        }
    }

    drawText('Who\'s playing?', { x: 150, y: 98 }, context, 'right');
    drawText(`${state.setup.amountOfPlayers} players`, { x: 172, y: 98 }, context);

    if (state.setup.currentlySelectedStep === 'amountOfPlayers') {
        if (state.setup.amountOfPlayers > amountOfPlayersMin) {
            drawSprite(getSprite(state, 'arrow-left'), context, { x: 160, y: 98 });
        }

        if (state.setup.amountOfPlayers < amountOfPlayersMax) {
            drawSprite(getSprite(state, 'arrow-right'), context, { x: 230, y: 98 });
        }
    }

    drawText('How many to win?', { x: 150, y: 118 }, context, 'right');
    drawText(`connect ${state.setup.connectToWin}`, { x: 172, y: 118 }, context);

    if (state.setup.currentlySelectedStep === 'connectToWin') {
        if (state.setup.connectToWin > connectToWinMin) {
            drawSprite(getSprite(state, 'arrow-left'), context, { x: 160, y: 118 });
        }

        if (state.setup.connectToWin < connectToWinMax) {
            drawSprite(getSprite(state, 'arrow-right'), context, { x: 230, y: 118 });
        }
    }

    drawText('start', { x: 172, y: 138 }, context);

    if (state.setup.currentlySelectedStep === 'startRound') {
        drawSprite(getSprite(state, 'arrow-right'), context, { x: 160, y: 138 });
    }
}

function drawPlayingRound(state: State, drawEvent: DrawEvent): void {
    const gameBoard = state.round.gameBoard as GameBoard;

    drawBoardBack(gameBoard, drawEvent.context, state);
    drawCoinsInBoard(gameBoard, drawEvent.context, state);
    drawBoardFront(gameBoard, drawEvent.context, state);

    if (state.round.phase === 'decideMove') {
        drawRoundDecidingMove(state, drawEvent);
    }

    if (state.round.phase === 'end') {
        drawRoundEnd(state, drawEvent);
    }
}

function drawRoundDecidingMove(state: State, { context }: DrawEvent): void {
    const boardOrigin = getBoardOrigin(state.round.boardSize);

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
    if (state.round.winner) {
        drawSprite(
            getSprite(state, `coin-${state.round.winner}`),
            context,
            {
                x: (gameSize.width / 2) - (tileSize.width / 2) - 12,
                y: 4
            }
        );

        drawText('wins!', { x: (gameSize.width / 2) - 2, y: 8 }, context);
    } else {
        drawText('tie...', { x: (gameSize.width / 2) + 0.5, y: 8 }, context, 'center');
    }
    
    drawText('q: set up new game | r: rematch', { x: (gameSize.width / 2) + 0.5, y: 24 }, context, 'center');
}

function drawCoinsInBoard(gameBoard: GameBoard, context: CanvasRenderingContext2D, state: State) {
    const boardOrigin = getBoardOrigin(state.round.boardSize);

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
    const boardOrigin = getBoardOrigin(state.round.boardSize);

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
    const boardOrigin = getBoardOrigin(state.round.boardSize);

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

function getBoardOrigin(boardSize: Size): Position {
    return {
        x: (gameSize.width / 2) - ((boardSize.width / 2) * tileSize.width),
        y: 40,
    };
}

function drawText(
    string: string,
    position: Position,
    context: CanvasRenderingContext2D,
    align: CanvasTextAlign = 'left',
    color: string = '#000000',
) {
    context.textAlign = align;
    context.textBaseline = 'top';
    context.fillStyle = color;
    context.font = '10px BirdSeed-Regular';
    context.fillText(string, position.x, position.y);
}

game.start();