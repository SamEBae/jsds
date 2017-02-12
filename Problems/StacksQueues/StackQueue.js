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

// Access:
// Time Complexity:     O(n)
// Space Complexity:    O(n)
Stack.prototype.access = function(n) {
    var bufferArray = this.getBuffer();
    if (n <= 0) throw 'error'

    var bufferStack = new Stack(bufferArray);

    while (--n !== 0) {
        bufferStack.pop();
    }
    return bufferStack.pop();
};

// Search:
// Time Complexity:     O(n)
// Space Complexity:    O(n)
Stack.prototype.search = function(element) {
    var bufferArray = this.getBuffer();
    var bufferStack = new Stack(bufferArray);

    while (!bufferStack.isEmpty()) {
        if (bufferStack.pop() == element) {
            return true;
        }
    }

    return false;
};

// Main
function StackQueue() {
    this.inbox = new Stack(); // first stack
    this.outbox = new Stack();
}

StackQueue.prototype.enqueue = function(val) {
    this.inbox.push(val);
};

StackQueue.prototype.dequeue = function() {
    if (this.outbox.isEmpty()) {
        while (!this.inbox.isEmpty()) {
            this.outbox.push(this.inbox.pop());
        }
    }
    return this.outbox.pop();

};

var queue = new StackQueue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

console.log(queue.dequeue()); // 1
console.log(queue.dequeue()); // 2
console.log(queue.dequeue()); // 3
console.log(queue.dequeue()); // 4
console.log(queue.dequeue()); // 5