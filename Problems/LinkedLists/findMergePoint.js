function findMergePoint(node1, node2) {
    var tempNode1 = Object.create(node1),
        tempNode2 = Object.create(node2);

    while (tempNode1.value != tempNode2.value) {
        if (!tempNode1.next) {
            tempNode1 = node2;
        } else {
            tempNode1 = tempNode1.next;
        }

        if (!tempNode2.next) {
            tempNode2 = node1;
        } else {
            tempNode2 = tempNode2.next;
        }
    }

    return tempNode1.next;
}

var node1 = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: {
                    value: 5
                }
            }
        }
    }
}

var node2 = {
    value: 3,
    next: {
        value: 4
    }
}

// node1 and node2 merges at 3 -> 4

console.log(findMergePoint(node1, node2)); // 4