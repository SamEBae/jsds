// Main
function rotateMatrix90Left(mat) {
    var N = mat.length;

    // Consider all squares one by one
    for (var x = 0; x < N / 2; x++) {
        // Consider elements in group of 4 in 
        // current square
        for (var y = x; y < N - x - 1; y++) {
            // store current cell in temp variable
            var temp = mat[x][y];

            // move values from right to top
            mat[x][y] = mat[y][N - 1 - x];

            // move values from bottom to right
            mat[y][N - 1 - x] = mat[N - 1 - x][N - 1 - y];

            // move values from left to bottom
            mat[N - 1 - x][N - 1 - y] = mat[N - 1 - y][x];

            // assign temp to left
            mat[N - 1 - y][x] = temp;
        }
    }
}
var matrix = [
    [1, 0, 1],
    [0, 0, 1],
    [1, 1, 1]
];
rotateMatrix90Left(matrix);

console.log(matrix); 
// matrix = [
//	[1,1,1], 
// 	[0,0,1],
//	[1,0,1]
//]