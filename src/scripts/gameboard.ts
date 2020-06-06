import repeat from '@bakkerjoeri/repeat';
import { choose } from 'roll-the-bones';

export interface GameBoard {
    id: string;
    currentPlayer: 'red' | 'yellow';
    isGameBoard: true;
    tiles: TileMap
}

export type TileMap = (string | null)[][];

export function createGameBoard(width: number, height: number): Omit<GameBoard, 'id'> {
    return {
        currentPlayer: choose(['red', 'yellow']),
        isGameBoard: true,
        tiles: createTileMap(width, height),
    }
}


function createTileMap(width: number, height: number): TileMap {
    const tileMap: TileMap = [];

    repeat(width, (x) => {
        tileMap[x] = [];

        repeat(height, (y) => {
            tileMap[x][y] = null;
        });
    });

    return tileMap;
}
