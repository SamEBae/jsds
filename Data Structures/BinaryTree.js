// Constructor for BinarySearchTree
function BinarySearchTree(){
    this._root = null;  
}

// Insertion
// Time Complexity:     O(h)
// Space Complexity:    O(h)
BinarySearchTree.prototype.insert = function(value) {
    var thisNode = {left: null, right: null, value: value};
    if(!this._root){
        // if there is no root value yet
        this._root = thisNode;
    }else{
        // loop traverse until
        var currentRoot = this._root;
        while(1){
            if(currentRoot.value>value){
                // let's increment if it's not a null and insert if it is a null
                if(currentRoot.left!=null){
                    currentRoot = currentRoot.left;
                }else{
                    currentRoot.left = thisNode;
                    break;
                }
            } else if (currentRoot.value<value){
                // if bigger than current, put it on the right
                // let's increment if it's not a null and insert if it is a null
                if(currentRoot.right!=null){
                    currentRoot = currentRoot.right;
                }else{
                    currentRoot.right = thisNode;
                    break;
                }
            } else {
                // ccase that both are the same
                break;
            }
        }
    }
}

// Deletion
// Time Complexity:     O(h)
// Space Complexity:    O(h)
BinarySearchTree.protoytype.remove = function(value){
    
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
BinarySearchTree.prototype.accessNode  = function(value){
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
BinarySearchTree.prototype.findNode  = function(value){
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

module.exports = BinarySearchTree;