// Constructor for TreeNode
function TreeNode(data){
    this.data = data;
    this.children = [];
}

// Constructor for BinaryTreeNode
function BinaryTreeNode(data){
    this.data = data;
    this.left = null;
    this.right= null;
}

// Constructor for BinaryTree
function BinaryTree(){
    this._root = null;  
}

// Traversal techniques
 
// h: height of the binary tree. Ideally n log_2(n)

// Pre-Order Traversal:
// Time Complexity:     O(n)
// Space Complexity:    O(h) 
BinaryTree.prototype.traversePreOrder = function(){
    traversePreOrderHelper(this._root);
    function traversePreOrderHelper(node){
        if(!node)
            return;
        console.log(node);
        traversePreOrderHelper(node.left);
        traversePreOrderHelper(node.right);
    }
}

// In-Order Traversal:
// Time Complexity:     O(n)
// Space Complexity:    O(h)
BinaryTree.prototype.traverseInOrder = function(){
    traverseInOrderHelper(this._root);
    function traverseInOrderHelper(node){
        if(!node)
            return;
        traverseInOrderHelper(node.left);
        console.log(node);
        traverseInOrderHelper(node.right);
    }
}

// Post-Order Traversal:
// Time Complexity:     O(n)
// Space Complexity:    O(h)
BinaryTree.prototype.traversePostOrder = function(){
    traversePostOrderHelper(this._root);
    function traversePostOrderHelper(node){
        if(node.left){
            traversePostOrderHelper(node.left);
        }
        if(node.right){
            traversePostOrderHelper(node.right);
        }
        console.log(node);
    }
}

module.exports = BinaryTree;