function knapsackNaiive(index, weights, values, target) {
	var result = 0;

	if (index <= -1 || target <= 0) {
		result = 0
	} else if (weights[index] > target) {
		result = knapsackNaiive(index-1, weights, values, target);
	} else {
		var temp1 = knapsackNaiive(index-1, weights, values, target);
		var temp2 = values[index] + knapsackNaiive(index-1, weights, values, target - weights[index]);
		result = Math.max(temp1, temp2);
	}
	return result;
}


var weights = [1,2,4,2,5];
var values 	= [5,3,5,3,2];
var target = 10;


console.log(knapsackNaiive(4,weights, values, target));