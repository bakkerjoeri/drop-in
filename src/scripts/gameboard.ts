import repeat from '@bakkerjoeri/repeat';
import { choose } from 'roll-the-bones';
import type { Player } from './main';

export interface GameBoard {
    id: string;
    isGameBoard: true;
    tiles: TileMap
}

export type TileMap = (Player | null)[][];

export function createGameBoard(width: number, height: number): Omit<GameBoard, 'id'> {
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
