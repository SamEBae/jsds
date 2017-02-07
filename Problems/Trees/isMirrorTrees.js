function isMirrorTrees(tree1, tree2) {

    // Base case, both empty
    if (!tree1 && !tree2) {
        return true;
    }

    // One of them is empty, since only one is empty, not mirrored
    if (!tree1 || !tree2) {
        return false;
    }

    // Both non-empty, compare them recursively. 
    // Pass left of one and right of the other

    var checkLeftwithRight = isMirrorTrees(tree1.left, tree2.right),
        checkRightwithLeft = isMirrorTrees(tree2.right, tree1.left);

    return tree1.data == tree2.data && checkLeftwithRight && checkRightwithLeft;
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
    },
    right: {
        value: 2,
        left: {
            value: 2.5
        }
    }
}

var node4 = {
    value: 3,
    left: {
        value: 1,
        right : {
            value: 2.5
        }
    },
    right: {
        value: 2
    }
}


console.log(isMirrorTrees(node1, node2)); // true
console.log(isMirrorTrees(node2, node3)); // false
console.log(isMirrorTrees(node3, node4)); // true