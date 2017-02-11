// Helpers
function linkedListToString(node) {
    var convertedString = ''
    while (node) {
        convertedString += ' ' + node.value;
        node = node.next;
    }
    return convertedString;
}

// Main
function deleteDuplicates(node) {
    var trackDict = {},
        prev = null;

    while (node) {
        // check if seen before:
        if (trackDict[node.value]) {
            prev.next = node.next;
        } else {
            trackDict[node.value] = true;
            prev = node;
        }
        node = node.next;
    }
}

// this node has a duplicate. 2 is repeated:
var node1 = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 2,
            next: {
                value: 4,
                next: {
                    value: 5
                }
            }
        }
    }
}

console.log(linkedListToString(node1)); // 1 2 2 4 5 
deleteDuplicates(node1);
console.log(linkedListToString(node1)); // 1 2 4 5