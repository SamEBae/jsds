// Main
function sumOfLeftLeaves(root, shouldAdd) {
    if (!root) return 0;

    if (!root.left && !root.right && shouldAdd) {
        return root.val;
    }

    var left = sumOfLeftLeaves(root.left, true);
    var right = sumOfLeftLeaves(root.right, false);

    return left + right;
};