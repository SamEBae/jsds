// Main
function duplicatesInArray(nums) {
    var duplicates = [];

    for (var i = 0, numsLength = nums.length; i < numsLength; i++) {
        if (nums[Math.abs(nums[i] - 1)] >= 0) {
            nums[Math.abs(nums[i] - 1)] *= -1;
        } else {
            duplicates.push(Math.abs(nums[i]));
        }
    }
    return duplicates;
}
console.log(duplicatesInArray([1, 2, 3, 1, 4])); // [1]
console.log(duplicatesInArray([1, 2, 3, 4, 3, 5, 6, 6, 5, 7])); // [3,6,5]