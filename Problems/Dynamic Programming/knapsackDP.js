function knapsackDP(index, weights, values, target, matrixDP) {
    var result = 0;
    if (matrixDP[index + '-' + target]) return matrixDP[index + '-' + target];

    if (index <= -1 || target <= 0) {
        result = 0
    } else if (weights[index] > target) {
        result = knapsackDP(index - 1, weights, values, target, matrixDP);
    } else {
        var temp1 = knapsackDP(index - 1, weights, values, target, matrixDP);
        var temp2 = values[index] + knapsackDP(index - 1, weights, values, target - weights[index], matrixDP);
        result = Math.max(temp1, temp2);
    }
    matrixDP[index + '-' + target] = result
    return result;
}


var weights = [1, 2, 4, 2, 5];
var values = [5, 3, 5, 3, 2];
var target = 10;
var matrixDP = {};

console.log(knapsackDP(4, weights, values, target, matrixDP)); // 16