// Main Helper
function longestCommonStringLength(str1, str2) {
    var matrix = Array(str1.length + 1).fill(Array(str2.length + 1).fill(0)),
        rowLength = str1.length + 1,
        colLength = str2.length + 1,
        max = 0;

    for (var row = 1; row < rowLength; row++) {
        for (var col = 1; col < colLength; col++) {
            var str1Char = str1.charAt(row - 1),
                str2Char = str2.charAt(col - 1);

            if (str1Char == str2Char) {
                matrix[row][col] = matrix[row - 1][col - 1] + 1;
                if (max < matrix[row][col]) {
                    max = matrix[row][col];
                }
            }

        }
    }
    return max;
}

function longestCommonString(str1, str2) {
    var matrix = Array(str1.length + 1).fill(Array(str2.length + 1).fill(0)),
        rowLength = str1.length + 1,
        colLength = str2.length + 1,
        max = 0;
    var masPos = [0,0];

    for (var row = 1; row < rowLength; row++) {
        for (var col = 1; col < colLength; col++) {
            var str1Char = str1.charAt(row - 1),
                str2Char = str2.charAt(col - 1);

            if (str1Char == str2Char) {
                matrix[row][col] = matrix[row - 1][col - 1] + 1;
                if (max < matrix[row][col]) {
                    max = matrix[row][col];
                    maxPos = [row,col];
                }
            }

        }
    }
    var string = ''
    while (matrix[maxPos[0], maxPos[1]]) {
    	string += matrix[maxPos[0], maxPos[1]];
    	maxPos = [maxPos[0]-1,maxPos[1]-1];
    }

    return max;
}

console.log(longestString('abcd', 'bc')); // 2