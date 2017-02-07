function getHeight(root) {

    // helper recursive function 
    function getHeightHelper(root) {
        if (!root) return 0;
        return Math.max(getHeightHelper(root.left) + 1, getHeightHelper(root.right) + 1);
    }

    return getHeightHelper(root);
}

function printKthLevels(root, k) {
    var rootHeight = getHeight(root),
        arrayKth = [],
        queue = []

    if (!root) return;

    // Breath first search for tree
    queue.push(root);

    while (queue.length) {
        var temp = queue.shift();

        if (highLimitFlag || getHeight(temp) == rootHeight - k + 1) {
            // Kth level is height - k + 1
            arrayKth.push(temp.value);
        }
        if (temp.left) {
            queue.push(temp.left);
        }
        if (temp.right) {
            queue.push(temp.right);
        }
    }
    console.log(arrayKth);
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

printKthLevels(node1, 1); // 1
printKthLevels(node1, 2); // [0,2]