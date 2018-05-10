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
                max = Math.max(matrix[row][col], max);
            }
        }
    }
    return max;
}
longestCommonStringLength('abcd', 'bc'); // 2