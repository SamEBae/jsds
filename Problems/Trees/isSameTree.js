function isSameTree(root1, root2) {
    if (root1 == null && root2 == null) {
        return true;
    }
    if (root1 == null || root2 == null) {
        return false;
    }

    return root1.value == root2.value && isSameTree(root1.left, root2.left) && isSameTree(root1.right, root2.right)
}

var node1 = {
    value: 3,
    left: {
        value: 1
    },
    right: {
        value: 2
    }
}

var node2 = {
    value: 5,
    left: {
        value: 3
    },
    right: {
        value: 7
    }
}

var node3 = {
    value: 3,
    left: {
        value: 1
    }
}

var node4 = {
    value: 3,
    right: {
        value: 2
    }
}
console.log(isSameTree(node1, node1)); // true
console.log(isSameTree(node2, node2)); // true
console.log(isSameTree(node1, node2)); // false
console.log(isSameTree(node1, node3)); // false
console.log(isSameTree(node1, node4)); // false