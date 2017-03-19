// Main
function missingNumber(nums) {
    var sum = nums.reduce((element1, element2) => {
        return element1 + element2
    });
    // sum of 1 to n is: (n*(n+1))/2
    return (nums.length * (nums.length + 1)) / 2 - sum;
}