// Helpers
function generateColumnArr(arr) {
    return arr.split("");
}

function printMatrix(matrix) {
    var mazePrintStr = "",
        row = matrix.length,
        column = matrix[0].length;

    for (var i = 0; i < row; i++) {

        for (var j = 0; j < column; j++) {
            mazePrintStr += mazeMatrix[i][j];
        }

        mazePrintStr += "\n";

    }
    console.log(mazePrintStr);
}

// Main
function mazePathFinder(mazeMatrix) {
    var row = mazeMatrix.length,
        column = mazeMatrix[0].length,
        startPos = findChar('e'),
        endPos = findChar('x')

    function findChar(char) {
        for (var i = 0; i < row; i++) {
            for (var j = 0; j < column; j++) {
                if (mazeMatrix[i][j] == char) {
                    return [i, j];
                }
            }
        }
    }

    path(startPos[0], startPos[1]);

    function path(x, y) {
        if (x > row - 1 || y > column - 1 || x < 0 || y < 0) {
            return false;
        }
        if (x == endPos[0] && y == endPos[1]) {
            return true;
        }
        if (mazeMatrix[x][y] == '%' || mazeMatrix[x][y] == '+') {
            return false;
        }
        // Mark the current spot
        mazeMatrix[x][y] = '+';

        printMatrix(mazeMatrix);

        if (path(x, y - 1) == true) {
            return true;
        }
        if (path(x + 1, y) == true) {
            return true;
        }
        if (path(x, y + 1) == true) {
            return true;
        }
        if (path(x - 1, y) == true) {
            return true;
        }
        mazeMatrix[x][y] = '.';
        return false;
    }
}

var mazeMatrix = "%e%%%%%%%%%\n%...%.%...%\n%.%.%.%.%%%\n%.%.......%\n%.%%%%.%%.%\n%.%\.....%.%\n%%%%%%%%%x%".split("\n").map(generateColumnArr);
mazePathFinder(mazeMatrix);