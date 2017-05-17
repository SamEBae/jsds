function threeSum(nums) {
    var result = [];
    nums.sort((a, b) => {
        return a - b
    });

    for (var i = 0, numsLength = nums.length - 2; i < numsLength; i++) {
        if (i > 0 && nums[i] == nums[i - 1])
            continue

        var left = i + 1,
            right = nums.length - 1;

        while (left < right) {
            var sum = nums[i] + nums[left] + nums[right];
            if (sum < 0) {
                left++;
            } else if (sum > 0) {
                right--;
            } else {

                result.push([nums[i], nums[left], nums[right]]);

                while (left < right && nums[left] == nums[left + 1]) {
                    left++;
                }
                while (left < right && nums[right] == nums[right - 1]) {
                    right--;
                }
                left++;
                right--;
            }
        }
    }
    return result;
}