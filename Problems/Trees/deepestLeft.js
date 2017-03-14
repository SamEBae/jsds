// Main
function deepestLeft(root) {
    var queue = [root];

    while (queue.length) {
        root = queue.shift();

        if (root.right) {
            queue.push(root.right);
        }

        if (root.left) {
            queue.push(root.left);
        }
    }
    return root.value;
}


var node1 = {
    value: 5,
    left: {
        value: 3,
        left: {
            value: -122
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

console.log(deepestLeft(node1)); // -122
console.log(deepestLeft(node2)); // 1
console.log(deepestLeft(node3)); // 1