// Main
function sumOfRightLeaves(root, shouldAdd) {
    if (!root) return 0;

    if (!root.left && !root.right && shouldAdd) {
        return root.val;
    }

    var left = sumOfRightLeaves(root.left, false);
    var right = sumOfRightLeaves(root.right, true);

    return left + right;
};