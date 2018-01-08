function binaryTreeToArray(root, size) {
	var array = new Array(size); // dynamic	


	var queue = [[root, 0]];

	while (queue.length) {
		var nodeTuple = queue.shift(),
			node = nodeTuple[0],
			nodeIndex = nodeTuple[1];
		console.log(node);
		array[nodeIndex] = node.value;

		if (node.right) {
			queue.push( [node.right, (nodeIndex * 2 + 2)]);
		}
		
		if (node.left) {
			queue.push([node.left, (nodeIndex * 2 + 1)]);
		}
		
	}
	return array;
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
            value: 3
        }
    }
}

console.log(binaryTreeToArray(node3, 5));