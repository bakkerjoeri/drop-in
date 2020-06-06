import repeat from '@bakkerjoeri/repeat';
export function createGameBoard(width, height) {
    return {
        id: null,
        isGameBoard: true,
        tiles: createTileMap(width, height),
    };
}
function createTileMap(width, height) {
    const tileMap = [];
    repeat(width, (x) => {
        repeat(height, (y) => {
            tileMap[x][y] = null;
        });
    });
    return tileMap;
}
