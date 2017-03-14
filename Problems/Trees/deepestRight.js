// Main
function deepestRight(root) {
    var queue = [root];

    while (queue.length) {
        root = queue.shift();

        if (root.left) {
            queue.push(root.left);
        }

        if (root.right) {
            queue.push(root.right);
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

console.log(deepestRight(node1)); // 2
console.log(deepestRight(node2)); // 2
console.log(deepestRight(node3)); // 1