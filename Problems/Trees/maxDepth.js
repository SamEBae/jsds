// Main
function maxDepth(root, height) {
    if (root == null) return 0;
    var left = minDepth(root.left);
    var right = minDepth(root.right);
    return (left == 0 || right == 0) ? left + right + 1 : Math.max(left, right) + 1;
};