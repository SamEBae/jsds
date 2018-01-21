function maxSubArray(nums) {
	let maxCurrent = nums[0],
		maxGlobal  = nums[0];

	for (let i=1; i < nums.length; i++ ) {
		// now or sum of now and before
		maxCurrent = Math.max(nums[i], nums[i] + maxCurrent);
		maxGlobal = Math.max(maxGlobal, maxCurrent);
	}
	return maxGlobal;
}

console.log(maxSubArray([2,-3,2,1]));