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

// Insertion
// Time Complexity:     O(h)
// Space Complexity:    O(h)
BinarySearchTree.prototype.insert: function(value) {
    var thisNode = {left: null, right: null, value: value};
    if(!this._root){
        //if there is no root value yet
        this._root = thisNode;
    }else{
        //loop traverse until
        var currentRoot = this._root;
        while(1){
            if(currentRoot.value>value){
                //let's increment if it's not a null and insert if it is a null
                if(currentRoot.left!=null){
                    currentRoot = currentRoot.left;
                }else{
                    currentRoot.left = thisNode;
                    break;
                }
            } else if (currentRoot.value<value){
                //if bigger than current, put it on the right
                //let's increment if it's not a null and insert if it is a null
                if(currentRoot.right!=null){
                    currentRoot = currentRoot.right;
                }else{
                    currentRoot.right = thisNode;
                    break;
                }
            } else {
                //case that both are the same
                break;
            }
        }   
    }
}

// Deletion
// Time Complexity:     O(h)
// Space Complexity:    O(h)
BinarySearchTree.protoytype.remove: function(value){
    
    return deleteRecursively(this._root, value);

    function deleteRecursively(root, value){
        if(!root) {
            return null;
        } else if ( value < root.value ) {
            root.left = deleteRecursively(root.left, value);
        } else if ( value > root.value ) {
            root.right = deleteRecursively(root.right, value);
        } else {
            //no child
            if(!root.left && !root.right){
                return null; // case 1
            }else if(!root.left){
                root = root.right;
                return root;    
            }else if(!root.right){
                root = root.left;
                return root;
            }else {
                var temp = findMin(root.right);
                root.value = temp.value;
                root.right = deleteRecursively(root.right, temp.value);
                return root;
            }
        }
        return root;
    }

    function findMin(root){
        while(root.left){
            root = root.left;
        }
        return root;
    }
}

// Access
// Search
// Time Complexity:     O(h)
// Space Complexity:    O(h)
BinarySearchTree.prototype.accessNode: function(value){
    var currentRoot = this._root,
        found = false;
    while(currentRoot){
        if(currentRoot.value > value){
            currentRoot = currentRoot.left;
        }else if(currentRoot.value < value){
            currentRoot = currentRoot.right;
        }else{
            return currentRoot;
        }
    }
    return null;
}

// Search
// Time Complexity:     O(h)
// Space Complexity:    O(h)
BinarySearchTree.prototype.findNode: function(value){
    var currentRoot = this._root,
        found = false;
    while(currentRoot){
        if(currentRoot.value > value){
            currentRoot = currentRoot.left;
        }else if(currentRoot.value < value){
            currentRoot = currentRoot.right;
        }else{
            //we've found the node
            found = true;
            break;
        }
    }
    return found;
}