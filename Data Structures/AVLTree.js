// Main
function AVLTree(n) {
    this.init(n);
}

AVLTree.prototype.init = function(value) {
    this.left = null;
    this.right = null;
    this.value = value;
    this.depth = 1;
};

AVLTree.prototype.balance = function() {
    var ldepth = this.left == null ? 0 : this.left.depth;
    var rdepth = this.right == null ? 0 : this.right.depth;

    if (ldepth > rdepth + 1) {
        // LR or LL rotation
        var lldepth = this.left.left == null ? 0 : this.left.left.depth;
        var lrdepth = this.left.right == null ? 0 : this.left.right.depth;

        if (lldepth < lrdepth) {
            // LR rotation consists of a RR rotation of the left child
            this.left.rotateRR();
            // plus a LL rotation of this node, which happens anyway
        }
        this.rotateLL();
    } else if (ldepth + 1 < rdepth) {
        // RR or RL rorarion
        var rrdepth = this.right.right == null ? 0 : this.right.right.depth;
        var rldepth = this.right.left == null ? 0 : this.right.left.depth;

        if (rldepth > rrdepth) {
            // RR rotation consists of a LL rotation of the right child
            this.right.rotateLL();
            // plus a RR rotation of this node, which happens anyway
        }
        this.rotateRR();
    }
};

AVLTree.prototype.rotateLL = function() {
    // the left side is too long => rotate from the left (_not_ leftwards)
    var valueBefore = this.value;
    var rightBefore = this.right;
    this.value = this.left.value;

    this.right = this.left;
    this.left = this.left.left;
    this.right.left = this.right.right;
    this.right.right = rightBefore;
    this.right.value = valueBefore;

    this.right.updateInNewLocation();
    this.updateInNewLocation();
};

AVLTree.prototype.rotateRR = function() {
    // the right side is too long => rotate from the right (_not_ rightwards)
    var valueBefore = this.value;
    var leftBefore = this.left;
    this.value = this.right.value;

    this.left = this.right;
    this.right = this.right.right;
    this.left.right = this.left.left;
    this.left.left = leftBefore;
    this.left.value = valueBefore;

    this.left.updateInNewLocation();
    this.updateInNewLocation();
};

AVLTree.prototype.updateInNewLocation = function() {
    this.getDepthFromChildren();
};

AVLTree.prototype.getDepthFromChildren = function() {
    this.depth = this.value == null ? 0 : 1;
    if (this.left != null) {
        this.depth = this.left.depth + 1;
    }
    if (this.right != null && this.depth <= this.right.depth) {
        this.depth = this.right.depth + 1;
    }
};

AVLTree.prototype.compare = function(n1, n2) {
    if (n1 == n2) {
        return 0;
    }
    if (n1 < n2) {
        return -1;
    }
    return 1;
};

AVLTree.prototype.add = function(n) {
    var o = this.compare(n, this.value);
    if (o == 0) {
        return false;
    }

    var ret = false;
    if (o == -1) {
        if (this.left == null) {
            this.left = new AVLTree(n);
            ret = true;
        } else {
            ret = this.left.add(n);
            if (ret) {
                this.balance();
            }
        }
    } else if (o == 1) {
        if (this.right == null) {
            this.right = new AVLTree(n);
            ret = true;
        } else {
            ret = this.right.add(n);
            if (ret) {
                this.balance();
            }
        }
    }

    if (ret) {
        this.getDepthFromChildren();
    }
    return ret;
};

// Given the beginning of a value, return the elements if there's a match
AVLTree.prototype.find = function(value) {

    if (value < this.value) {
        if (this.left != null) {
            return this.left.find(value);
        }
    } else if (value > this.value) {
        if (this.right != null) {
            return this.right.find(value);
        }
    }
    return this;
}

AVLTree.prototype.remove = function(value) {
    return deleteRecursively(this, value);

    function deleteRecursively(root, value) {
        if (!root) {
            return null;
        } else if (value < root.value) {
            root.left = deleteRecursively(root.left, value);
        } else if (value > root.value) {
            root.right = deleteRecursively(root.right, value);
        } else {
            //no child
            if (!root.left && !root.right) {
                return null; // case 1
            } else if (!root.left) {
                root = root.right;
                return root;
            } else if (!root.right) {
                root = root.left;
                return root;
            } else {
                var temp = findMin(root.right);
                root.value = temp.value;
                root.right = deleteRecursively(root.right, temp.value);
                return root;
            }
        }
        root.updateInNewLocation();
        return root;
    }

    function findMin(root) {
        while (root.left) {
            root = root.left;
        }
        return root;
    }
}

var avlTest = new AVLTree(1, '');
avlTest.add(2);
avlTest.add(3);
avlTest.add(4);
avlTest.add(5);
avlTest.add(123);
avlTest.add(203);
avlTest.add(2222);

console.log(avlTest);