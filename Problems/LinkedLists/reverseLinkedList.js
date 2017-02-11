// Helpers:
function linkedListToString(node) {
    var convertedString = ''
    while (node) {
        convertedString += ' ' + node.value;
        node = node.next;
    }
    return convertedString;
}

// Main:
function reverseSinglyLinkedList(node) {
    var prev = null;

    while (node) {
        var temp = node.next;
        node.next = prev;
        prev = node;
        if (!temp)
            break;
        node = temp;
    }
    return node;
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

var node1Reversed = {
    value: 5,
    next: {
        value: 4,
        next: {
            value: 3,
            next: {
                value: 2,
                next: {
                    value: 1
                }
            }
        }
    }
}

console.log(linkedListToString(node1)); // 1 2 3 4 5
var revesedNode = reverseSinglyLinkedList(node1);
console.log(linkedListToString(revesedNode)); // 5 4 3 2 1