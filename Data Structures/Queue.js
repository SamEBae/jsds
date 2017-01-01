// Constructor
function Queue(array){
    this.array = [];
    if(array) this.array = array;
}

// Helpers
Queue.prototype.getBuffer = function(){
    return this.array.slice();
}

Queue.prototype.isEmpty = function(){
    return this.array.length == 0;
}

Queue.prototype.peek = function(){
    return this.array[0];
}

// Access:
// Time Complexity:     O(n)
// Space Complexity:    O(n)
Queue.prototype.access = function(n) {
    var bufferArray = this.getBuffer();
    if(n<=0) throw 'error'

    var bufferStack = new Queue(bufferArray);

    while(--n!==0){
        bufferStack.dequeue();
    }
    return bufferStack.dequeue();
}

// Search:
// Time Complexity:     O(n)
// Space Complexity:    O(n)
Queue.prototype.search = function(element) {
    var bufferArray = this.getBuffer();
    var bufferQueue = new Queue(bufferArray);

    while(!bufferQueue.isEmpty()){
        if(bufferQueue.dequeue()==element){
            return true;
        }
    }
    return false;
}
// Insertion:
// Time Complexity:     O(1)
// Space Complexity:    O(1)
Queue.prototype.enqueue = function(value){
    return this.array.push(value);
}

// Deletion:
// Time Complexity:     O(1)
// Space Complexity:    O(1)
Queue.prototype.dequeue = function() {
    return this.array.shift();
};

// Testing code

// var queue1 = new Queue();
// queue1.enqueue(1);
// queue1.enqueue(2);
// queue1.enqueue(3);
// console.log(queue1); // {array: [1,2,3]}
// queue1.dequeue();
// console.log(queue1); // {array: [2,3]}
// queue1.dequeue();
// console.log(queue1); // {array: [3]}

module.exports = Queue;