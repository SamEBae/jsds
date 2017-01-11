// Constructor
function LinkedListNode(data) {
    this.data = data;
    this.next = null;
}

// Constructor
function SingleLinkedList(){
    this.head = null;
    this.size = 0;
}

// Helpers
SingleLinkedList.prototype.isEmpty = function(){
    return this.size == 0;
}


// Insertion
// Time Complexity:     O(n)
// Space Complexity:    O(1)
SingleLinkedList.prototype.push = function(value) {
    var node = new LinkedListNode(value),
        currentNode = this.head;
 
    // if empty, and first element to be added
    if (!currentNode) {
        this.head = node;
        this.size++;
        return node;
    }
 
    // get to the end 
    while (currentNode.next) {
        currentNode = currentNode.next;
    }
    currentNode.next = node;
    
    this.size++;

    return node;
};

// Deletion
// Time Complexity:     O(n)
// Space Complexity:    O(1)
SinglyLinkedList.prototype.remove = function(value) {
    var currentHead = this.head;
    if(currentHead.data==value){
        // just shift the head over. Head is now this new value
        this.head = currentHead.next;
    }else{
        var prev = currentHead;
        while(currentHead.next){
            if(currentHead.data==value){
                // remove by skipping
                prev.next = currentHead.next;
                prev = currentHead;
                currentHead = currentHead.next;
                break; // break out of the loop
            }
            prev = currentHead;
            currentHead = currentHead.next;
        }
        //if wasn't found in the middle or head, must be tail
        if(currentHead.data==value){
            prev.next = null;
        }
    }
    this.size--;
};

// Access:
// Time Complexity:     O(n)
// Space Complexity:    O(n)
SinglyLinkedList.prototype.access = function(N) {
    var currentHead = this.head;
    var counter=0;
    while(currentHead.next){
        if(N == counter){
            return currentHead;
        }
        counter++;
        currentHead = currentHead.next;
    }
};

// Search:
// Time Complexity:     O(n)
// Space Complexity:    O(n)
SinglyLinkedList.prototype.find = function(value) {
    var currentHead = this.head;
    while(currentHead.next){
        if(currentHead.data == value){
            return true;
        }
        currentHead = currentHead.next;
    }
    return false;
};

module.exports = SingleLinkedList;