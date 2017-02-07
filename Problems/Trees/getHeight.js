function getHeight(root) {

    // helper recursive function 
    function getHeightHelper(root) {
        if (!root) return 0;
        return Math.max(getHeightHelper(root.left) + 1, getHeightHelper(root.right) + 1);
    }

    return getHeightHelper(root);
}

var node1 = {
    value: 1,
    left: {
        value: 0
    },
    right: {
        value: 2
    }
}

var node2 = {
    value: 1,
    left: {
        value: 0,
        left: {
            value: -1
        },
        right: {
            value: 0.5
        }
    },
    right: {
        value: 2
    }
}

var node3 = {
    value: 1,
    left: {
        value: 0
    },
    right: {
        value: 2,
        left: {
            value: 1.5
        },
        right: {
            value: 3,
            left: {
                value: 3.25
            }
        }
    }
}

console.log(getHeight(node1)); // 2
console.log(getHeight(node2)); // 3
console.log(getHeight(node3)); // 4