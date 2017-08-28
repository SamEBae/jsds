function lcsDP(A, B) {
    var matrix = [];

    for (var i = 0; i < A.length + 1; i++) {
        matrix.push(new Array(B.length + 1));
    }

    for (var i = 0; i < A.length + 1; i++) {

        for (var j = 0; j < B.length + 1; j++) {
            if (i == 0 || j == 0) {
                matrix[i][j] = '';
            } else if (A[i - 1] == B[j - 1]) {
                matrix[i][j] = matrix[i - 1][j - 1] + A[i - 1];
            } else {
            	if (matrix[i - 1][j].length == matrix[i][j -1]) {
            		matrix[i][j] =  matrix[i - 1][j];
            	} else if (matrix[i - 1][j].length > matrix[i][j -1]) {
            		matrix[i][j] =  matrix[i - 1][j];
            	} else {
            		matrix[i][j] == matrix[i][j -1];
            	}
                
            }
        }

    }
    return matrix[A.length][B.length];
}
console.log(lcsDP("AYXT", "AYZXT")); // 4