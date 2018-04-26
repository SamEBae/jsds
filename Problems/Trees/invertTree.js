// Main
function invertTree(root) {
	function invertTreeHelper(root) {
		if (!root) {
			return;
		}
		invertTreeHelper(root.left);
		invertTreeHelper(root.right);

		let temp = root.right;
		root.right = root.left;
		root.left = temp;
		return root;
	}
	return invertTreeHelper(root);
}
var sampleTree = {'val': 4, 'left': {'val': 3, 'left':{}, 'right':{}} ,'right': {'val': 5, 'left':{}, 'right':{}}};
console.log(invertTree(sampleTree));