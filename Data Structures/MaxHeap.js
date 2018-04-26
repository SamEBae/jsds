// Main
function MaxHeap() {
    this.items = [];
};

MaxHeap.prototype.swap = function(index1, index2) {
    var temp = this.items[index1];
    this.items[index1] = this.items[index2];
    this.items[index2] = temp;
};
 
MaxHeap.prototype.parentIndex = function(index) {
    return Math.floor((index - 1) / 2);
};

MaxHeap.prototype.leftChildIndex = function(index) {
    return index * 2 + 1;
};

MaxHeap.prototype.rightChildrenIndex = function(index) {
    return index * 2 + 2;
};

MaxHeap.prototype.parent = function(index) {
    return this.items[this.parentIndex(index)];
};

MaxHeap.prototype.leftChild = function(index) {
    return this.items[this.leftChildIndex(index)];
};

MaxHeap.prototype.rightChild = function(index) {
    return this.items[this.rightChildrenIndex(index)];
};

MaxHeap.prototype.add = function(item) {
    this.items[this.items.length] = item;
    this.bubbleUp();
};

MaxHeap.prototype.peak = function() {
    return this.items[0];
};

MaxHeap.prototype.poll = function() {
    var item = this.items[0];
    this.items[0] = this.items[this.items.length-1];
    this.items.pop();
    this.bubbleDown();
    return item;    
};

MaxHeap.prototype.bubbleDown = function() {
    var index = 0;

    while (this.leftChild(index) && this.leftChild(index) > this.items[index]) {
        var biggerIndex = this.leftChildIndex(index);
        if (this.rightChild(index) && this.rightChild(index) > this.items[biggerIndex]) {
            biggerIndex = this.rightChildrenIndex(index);
        }

        this.swap(biggerIndex, index);
        index = biggerIndex;
    }

};

MaxHeap.prototype.bubbleUp = function() {
    var index = this.items.length - 1;
    
    while (this.parent(index) && this.parent(index) < this.items[index]) {
        this.swap(this.parentIndex(index), index);
        index = this.parentIndex(index);
    }

};