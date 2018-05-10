// Helpers
function Matrix(rows, columns) {
    var jaggedarray = new Array(rows);
    for (var i = 0; i < columns; i += 1) {
        jaggedarray[i] = new Array(rows);
    }
    return jaggedarray;
}

// Main
// Non-DP solution


// Returns the count of ways we can sum coinArr which have 
// index like: [0,...,numCoins]
function countCoinWays(coinArr, numCoins, coinValue) {
    if (coinValue == 0) {
        // if the value reached zero, then only solution is 
        // to not include any coin
        return 1;
    }
    if (coinValue < 0 || (numCoins <= 0 && coinValue >= 1)) {
        // value is less than 0 means no solution
        // no coins left but coinValue left also means no solution
        return 0;
    }
    // 
    return countCoinWays(coinArr, numCoins - 1, coinValue) +
        countCoinWays(coinArr, numCoins, coinValue - coinArr[numCoins - 1]);
}

function countCoinWaysWrapper(coinArr, coinValue) {
    return countCoinWays(coinArr, coinArr.length, coinValue);
}
countCoinWaysWrapper([1, 2, 3], 4); // 4


// DP solution
function countCoinWaysDP(coinArr, numCoins, coinValue) {
    var matrix = Matrix(numCoins, coinValue + 1);

    // filling the matrix for 0 case (ie coinValue = 0)
    for (var i = 0; i < numCoins; i++) {
        matrix[0][i] = 1;
    }

    // fill rest bottom-up
    for (var i = 1; i < coinValue + 1; i++) {
        for (var j = 0; j < numCoins; j++) {
            var x = 0,
                y = 0;
            if (i - coinArr[j] >= 0) {
                x = matrix[i - coinArr[j]][j];
            }
            if (j >= 1) {
                y = matrix[i][j - 1]
            }
            matrix[i][j] = x + y;
        }
    }

    return matrix[coinValue][numCoins - 1];
}

function countCoinWaysDPWrapper(coinArr, coinValue) {
    return countCoinWaysDP(coinArr, coinArr.length, coinValue);
}
countCoinWaysDP([1, 2, 3], 3, 4); // 4