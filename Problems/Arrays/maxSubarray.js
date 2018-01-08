function maxSubArray(nums) {
    var maxCurrent = nums[0],
        maxGlobal = nums[0];

    for (var i = 1; i < nums.length; i++) {
        maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
        if (maxGlobal < maxCurrent)
            maxGlobal = maxCurrent;
    }
    return maxGlobal;
};

var testArray = [1, -3, 2, 1, -1];
console.log(maxSubArray(testArray));