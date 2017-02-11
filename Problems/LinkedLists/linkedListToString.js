function linkedListToString(node) {
    var convertedString = ''
    while (node) {
        convertedString += ' ' + node.value;
        node = node.next;
    }
    return convertedString;
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

console.log(linkedListToString(node1)); // 1 2 3 4 5