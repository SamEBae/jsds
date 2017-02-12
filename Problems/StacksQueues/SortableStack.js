// Helpers
// Constructor
function Stack(array) {
    this.array = [];
    if (array) this.array = array;
}

// Helpers
Stack.prototype.getBuffer = function() {
    return this.array.slice();
}

Stack.prototype.isEmpty = function() {
    return this.array.length == 0;
}

Stack.prototype.peek = function() {
    return this.array[this.array.length - 1];
}

// Insertion:
// Time Complexity:     O(1)
// Space Complexity:    O(1)
Stack.prototype.push = function(value) {
    this.array.push(value);
}

// Deletion:
// Time Complexity:     O(1)
// Space Complexity:    O(1)
Stack.prototype.pop = function() {
    return this.array.pop();
};

// Main
function SortableStack(size) {
    this.size = size;
    this.mainStack = new Stack();
    this.sortedStack = new Stack();
}

SortableStack.prototype.sortStackDescending = function() {
    while (!this.mainStack.isEmpty()) {
        var temp = this.mainStack.pop();
        while (!this.sortedStack.isEmpty() && this.sortedStack.peek() < temp) {
            this.mainStack.push(this.sortedStack.pop());
        }
        this.sortedStack.push(temp);
    }
}

SortableStack.prototype.sortStackAscending = function() {
    while (!this.mainStack.isEmpty()) {
        var temp = this.mainStack.pop();
        while (!this.sortedStack.isEmpty() && this.sortedStack.peek() > temp) {
            this.mainStack.push(this.sortedStack.pop());
        }
        this.sortedStack.push(temp);
    }
}

var ss = new SortableStack(10);

// let's initialize it with some random ints
for (var i = 0; i < ss.size; i++) {
    ss.mainStack.push(Math.floor(Math.random() * 11));
}

console.log(ss);
ss.sortStackDescending();
console.log(ss);