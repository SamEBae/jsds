// Helpers
function BSTNode(val) {
	this.val = val;
	this.left= null;
	this.right=null;
}

// Main
function createBSTFromArray(arr) {
	// assumes that arr is sorted
	function createBSTFromArrayHelper(arr, left, right) {
		if (right < left) {
			return;
		}
		var mid  = Math.floor((left+right)/2),
			node = new BSTNode(arr[mid]);
		node.left = createBSTFromArrayHelper(arr, left, mid-1);
		node.right= createBSTFromArrayHelper(arr, mid+1, right);
		return node;
	}
	return createBSTFromArrayHelper(arr,0,arr.length-1);
}

console.log(createBSTFromArray([1,2,3,4,5,6,7,8,9,10]));