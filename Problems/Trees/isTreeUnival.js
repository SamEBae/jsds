function isTreeUnival(root) {
    if (!root || !root.left && !root.right) {
        return true;
    }

    var checkChild = true;

    if (root.left || root.right) {
        if (root.left && root.right) {
            checkChild = root.value == root.left.value && root.value == root.right.value;
        } else if (root.left && !root.right) {
            checkChild = root.value == root.left.value
        } else {
            checkChild = root.value == root.right.value
        }
    }
    return checkChild && isTreeUnival(root.left) && isTreeUnival(root.right);
}

var node1 = {
    value: 2,
    left: {
        value: 2
    },
    right: {
        value: 2
    }
}

var node2 = {
    value: 2,
    left: {
        value: 2
    },
    right: {
        value: 2,
        left: {
            value: 2
        }
    }
}

var node3 = {
    value: 1,
    left: {
        value: 2
    },
    right: {
        value: 2
    }
}

var node4 = {
    value: 2,
    left: {
        value: 2
    },
    right: {
        value: 2,
        left: {
            value: 1
        }
    }
}

console.log(isTreeUnival(node1)); // true
console.log(isTreeUnival(node2)); // true
console.log(isTreeUnival(node3)); // false
console.log(isTreeUnival(node4)); // false