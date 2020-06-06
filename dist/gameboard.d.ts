export interface GameBoard {
    id: string;
    currentPlayer: 'red' | 'yellow';
    isGameBoard: true;
    tiles: TileMap;
}
export declare type TileMap = (string | null)[][];
export declare function createGameBoard(width: number, height: number): Omit<GameBoard, 'id'>;
