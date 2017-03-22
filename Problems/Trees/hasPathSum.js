// Main
function hasPathSum(root, sum) {
    if (!root) return false;
    if (!root.left && !root.right && sum - root.val == 0) return true;
    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
};

var node1 = {
    val: 1,
    left: {
        val: 2,
        right: {
            val: 5
        }
    },
    right: {
        val: 10,
        right: {
            val: 12
        }
    }
};
// left's children path add up to 8: 1 + 2 + 5
// right's children path add up to 23: 1 + 10 + 12
console.log(hasPathSum(node1, 8)); // true
console.log(hasPathSum(node1, 10)); // true
console.log(hasPathSum(node1, 23)); // false;
console.log(hasPathSum(node1, 13)); // false;