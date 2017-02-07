function isSameTree(root1, root2) {
    if (root1 == null && root2 == null) {
        return true;
    }
    if (root1 == null || root2 == null) {
        return false;
    }

    return root1.value == root2.value && isSameTree(root1.left, root2.left) && isSameTree(root1.right, root2.right)
}

function checkIfSubTree(root, subtree) {
    // Breath first search
    var queue = [],
        counter = 0;

    // sanity check for root
    if (!root) {
        return;
    }

    queue.push(root);

    while (queue.length) {
        var temp = queue.shift();

        if (temp.data == subtree.data == isSameTree(temp, subtree)) {
            return true;
        }

        if (temp.left) {
            queue.push(temp.left);
        }
        if (temp.right) {
            queue.push(temp.right);
        }
    }
    return false;
}

var node1 = {
    value: 5,
    left: {
        value: 3,
        left: {
            value: 1
        },
        right: {
            value: 2
        }
    },
    right: {
        value: 7
    }
}

var node2 = {
    value: 3,
    left: {
        value: 1
    },
    right: {
        value: 2
    }
}


var node3 = {
    value: 3,
    left: {
        value: 1
    }
}

console.log(checkIfSubTree(node1, node2)); // true
console.log(checkIfSubTree(node1, node3)); // false
console.log(checkIfSubTree(node2, node3)); // false