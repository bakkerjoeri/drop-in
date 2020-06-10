import type { Player } from './main';
export interface GameBoard {
    isGameBoard: true;
    tiles: TileMap;
}
export declare type TileMap = (Player | null)[][];
export declare function createGameBoard(width: number, height: number): GameBoard;
