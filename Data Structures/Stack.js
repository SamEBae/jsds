// Constructor
function Stack(array){
    this.array = [];
    if(array) this.array = array;
}

// Helpers
Stack.prototype.getBuffer = function(){
    return this.array.slice();
}

Stack.prototype.isEmpty = function(){
    return this.array.length == 0;
}

Stack.prototype.peek = function(){
    return this.array[this.array.length-1];
}

// Insertion:
// Time Complexity:     O(1)
// Space Complexity:    O(1)
Stack.prototype.push = function(value){
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
    if(n<=0) throw 'error'

    var bufferStack = new Stack(bufferArray);

    while(--n!==0){
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

    while(!bufferStack.isEmpty()){
        if(bufferStack.pop()==element){
            return true;
        }
    }

    return false;
};


// Testing code

// var stack1 = new Stack();

// stack1.push(1);
// stack1.push(2);
// stack1.push(3);

// console.log(stack1); // {array: [1,2,3]}

// stack1.pop(1);
// stack1.pop(2);
// stack1.pop(3);

// console.log(stack1); // {array: []}    

module.exports = Stack;