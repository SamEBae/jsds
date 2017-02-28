// Main
function spiralPrint(M) {
    var topRow = 0,
        leftCol = 0,
        btmRow = M.length - 1,
        rightCol = M[0].length - 1;

    while (topRow < btmRow && leftCol < rightCol) {
        for (var col = 0; col <= rightCol; col++) {
            console.log(M[topRow][col]);
        }
        topRow++;
        for (var row = topRow; row <= btmRow; row++) {
            console.log(M[row][rightCol]);
        }
        rightCol--;
        if (topRow <= btmRow) {
            for (var col = rightCol; col > 0; col--) {
                console.log(M[btmRow][col]);
            }
            btmRow--;
        }
        if (leftCol <= rightCol) {
            for (var row = btmRow; row > topRow; row--) {
                console.log(M[row][leftCol]);
            }
            leftCol++;
        }
    }
}
var M = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20]
];
spiralPrint(M);