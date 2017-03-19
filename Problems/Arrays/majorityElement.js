// Main
function majorityElement(nums) {
    var majority = nums[0],
        counter = 1;

    for (var i = 1, numsLength = nums.length; i < numsLength; i++) {
        if (counter === 0) {
            counter = 1;
            majority = nums[i];
        } else if (nums[i] === majority) {
            counter++;
        } else {
            counter--;
        }
    }
    return majority;
}