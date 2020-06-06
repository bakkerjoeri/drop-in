import { SpriteSheet } from "heks"

const spriteSheet: SpriteSheet = [
    {
        name: 'coin-red',
        frames: [
            {
                file: 'src/assets/sprites/coins.png',
                origin: { x: 0, y: 0},
                size: {width: 16, height: 16 },
            }
        ],
        offset: {x: 0, y: 0},
    },
    {
        name: 'coin-blue',
        frames: [
            {
                file: 'src/assets/sprites/coins.png',
                origin: { x: 0, y: 16},
                size: {width: 16, height: 16 },
            }
        ],
        offset: {x: 0, y: 0},
    },
    {
        name: 'board-position-front',
        frames: [
            {
                file: 'src/assets/sprites/board.png',
                origin: { x: 8, y: 40},
                size: {width: 16, height: 16 },
            }
        ],
        offset: {x: 0, y: 0},
    },
    {
        name: 'board-column-top-front',
        frames: [
            {
                file: 'src/assets/sprites/board.png',
                origin: { x: 8, y: 32},
                size: {width: 16, height: 8 },
            }
        ],
        offset: {x: 0, y: 0},
    },
    {
        name: 'board-column-bottom-front',
        frames: [
            {
                file: 'src/assets/sprites/board.png',
                origin: { x: 8, y: 56},
                size: {width: 16, height: 8 },
            }
        ],
        offset: {x: 0, y: 0},
    },
    {
        name: 'board-row-left-front',
        frames: [
            {
                file: 'src/assets/sprites/board.png',
                origin: { x: 0, y: 40},
                size: {width: 8, height: 16 },
            }
        ],
        offset: {x: 0, y: 0},
    },
    {
        name: 'board-row-right-front',
        frames: [
            {
                file: 'src/assets/sprites/board.png',
                origin: { x: 24, y: 40},
                size: {width: 8, height: 16 },
            }
        ],
        offset: {x: 0, y: 0},
    },
    {
        name: 'board-corner-top-left-front',
        frames: [
            {
                file: 'src/assets/sprites/board.png',
                origin: { x: 0, y: 32},
                size: {width: 8, height: 8 },
            }
        ],
        offset: {x: 0, y: 0},
    },
    {
        name: 'board-corner-top-right-front',
        frames: [
            {
                file: 'src/assets/sprites/board.png',
                origin: { x: 24, y: 32},
                size: {width: 8, height: 8 },
            }
        ],
        offset: {x: 0, y: 0},
    },
    {
        name: 'board-corner-bottom-right-front',
        frames: [
            {
                file: 'src/assets/sprites/board.png',
                origin: { x: 24, y: 56},
                size: {width: 8, height: 8 },
            }
        ],
        offset: {x: 0, y: 0},
    },
    {
        name: 'board-corner-bottom-left-front',
        frames: [
            {
                file: 'src/assets/sprites/board.png',
                origin: { x: 0, y: 56},
                size: {width: 8, height: 8 },
            }
        ],
        offset: {x: 0, y: 0},
    },
    {
        name: 'board-position-back',
        frames: [
            {
                file: 'src/assets/sprites/board.png',
                origin: { x: 8, y: 8},
                size: {width: 16, height: 16 },
            }
        ],
        offset: {x: 0, y: 0},
    },
    {
        name: 'board-column-top-back',
        frames: [
            {
                file: 'src/assets/sprites/board.png',
                origin: { x: 8, y: 0},
                size: {width: 16, height: 8 },
            }
        ],
        offset: {x: 0, y: 0},
    },
    {
        name: 'board-corner-top-left-back',
        frames: [
            {
                file: 'src/assets/sprites/board.png',
                origin: { x: 0, y: 0},
                size: {width: 8, height: 8 },
            }
        ],
        offset: {x: 0, y: 0},
    },
    {
        name: 'board-corner-top-right-back',
        frames: [
            {
                file: 'src/assets/sprites/board.png',
                origin: { x: 24, y: 0},
                size: {width: 8, height: 8 },
            }
        ],
        offset: {x: 0, y: 0},
    },
];


export default spriteSheet;