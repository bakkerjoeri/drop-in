import repeat from '@bakkerjoeri/repeat';
import type { Player } from './main';

export interface GameBoard {
    isGameBoard: true;
    tiles: TileMap
}

export type TileMap = (Player | null)[][];

export function createGameBoard(width: number, height: number): GameBoard {
    return {
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
