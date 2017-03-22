// Main
function rightSideView(root) {
    if (!root) return [];
    var result = [];

    function helper(root, level) {
        if (!root) return;
        if (result.length < level)
            result.push(root.val);
        helper(root.right, level + 1);
        helper(root.left, level + 1);
    }
    helper(root, 1);
    return result;
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

var node2 = {
    val: 1,
    right: {
        val: 2,
        right: {
            val: 5
        }
    },
    left: {
        val: 10,
        right: {
            val: 12
        }
    }
};

console.log(rightSideView(node1)); // [10, 2, 5]
console.log(rightSideView(node2)); // [1, 2, 5]