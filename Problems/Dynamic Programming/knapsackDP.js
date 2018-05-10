function knapsackDP(index, weights, values, target, matrixDP) {
    var result = 0;
     
    // DP part
    if (matrixDP[index + '-' + target]){
        return matrixDP[index + '-' + target];
    }

    if (index <= -1 || target <= 0) {
        result = 0
    } else if (weights[index] > target) {
        result = knapsackDP(index - 1, weights, values, target, matrixDP);
    } else {
       var current = knapsackNaiive(index-1, weights, values, target),
           currentPlusOther = values[index] + knapsackNaiive(index-1, weights, values, target - weights[index]);
        result = Math.max(current, currentPlusOther);
    }
    matrixDP[index + '-' + target] = result
    return result;
}

var weights = [1, 2, 4, 2, 5];
var values = [5, 3, 5, 3, 2];
var target = 10;
var matrixDP = {};

console.log(knapsackDP(4, weights, values, target, matrixDP)); // 16