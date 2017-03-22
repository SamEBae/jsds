// Main
function subsets(nums) {
    var result = [];
    dfsSubset(nums.sort(), 0, [], result);
    return result;
}

function dfsSubset(nums, index, path, res) {
    res.push(path);
    for (var i = index, numsLength = nums.length; i < numsLength; i++) {
    	dfsSubset(nums, i + 1, path.concat(nums[i]), res);
    }
}