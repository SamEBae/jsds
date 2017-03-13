// Helpers:
function linkedListToString(node) {
    var convertedString = ''
    while (node) {
        convertedString += ' ' + node.value;
        node = node.next;
    }
    return convertedString;
}

// Main
function deleteNode(node) {
    // deletes node given only that node for linked list
    var temp = node.next;
    node.value = temp.value;
    node.next = temp.next;
}


// Tests
var ll1 = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
}

var ll2 = {
    value: 1,
    next: {
        value: 0,
        next: {
            value: 2,
            next: null
        }
    }
}

console.log(linkedListToString(ll1)); // 1 2 3 4
deleteNode(ll1.next.next);
console.log(linkedListToString(ll1)); // 1 2 4

console.log(linkedListToString(ll2)); // 1 0 2
deleteNode(ll2.next);
console.log(linkedListToString(ll2)); // 1 2