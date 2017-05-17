function upsideDownBinaryTree(root) {
    var current = root,
        prev = null,
        next = null,
        temp = null;

    while (current) {
        next = current.left;
        current.left = temp;
        temp = current.right;
        current.right = prev;
        prev = current;
        current = next;
    }
    return prev;
};