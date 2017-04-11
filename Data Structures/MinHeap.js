// Main
function MinHeap() {
    this.items = [];
};

MinHeap.prototype.swap = function(index1, index2) {
    var temp = this.items[index1];
    this.items[index1] = this.items[index2];
    this.items[index2] = temp;
};

MinHeap.prototype.parentIndex = function(index) {
    return Math.floor((index - 1) / 2);
};

MinHeap.prototype.leftChildIndex = function(index) {
    return index * 2 + 1;
};

MinHeap.prototype.rightChildrenIndex = function(index) {
    return index * 2 + 2;
};

MinHeap.prototype.parent = function(index) {
    return this.items[this.parentIndex(index)];
};

MinHeap.prototype.leftChild = function(index) {
    return this.items[this.leftChildIndex(index)];
};

MinHeap.prototype.rightChild = function(index) {
    return this.items[this.rightChildrenIndex(index)];
};

MinHeap.prototype.add = function(item) {
    this.items[this.items.length] = item;
    this.bubbleUp();
};

MinHeap.prototype.peak = function() {
    return this.items[0];
};

MinHeap.prototype.poll = function() {
    var item = this.items[0];
    this.items[0] = this.items[this.items.length-1];
    this.items.pop();
    this.bubbleDown();
    return item;    
};

MinHeap.prototype.bubbleDown = function() {
    var index = 0;

    while (this.leftChild(index) && this.leftChild(index) < this.items[index]) {
        var smallerIndex = this.leftChildIndex(index);
        if (this.rightChild(index) && this.rightChild(index) < this.items[smallerIndex]) {
            smallerIndex = this.rightChildrenIndex(index);
        }

        this.swap(smallerIndex, index);
        index = smallerIndex;
    }

};

MinHeap.prototype.bubbleUp = function() {
    var index = this.items.length - 1;
    
    while (this.parent(index) && this.parent(index) > this.items[index]) {
        this.swap(this.parentIndex(index), index);
        index = this.parentIndex(index);
    }

};