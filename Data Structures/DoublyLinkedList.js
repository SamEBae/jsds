// Main
function LinkedListNode(value) {
    this.data = value;
    this.prev = null;
    this.next = null;
}

function DoublyLinkedList() {
	this.head = null;
	this.tail = null;
}

DoublyLinkedList.prototype.addAtFront = function(value) {
	if (this.head === null) {  //If first node
        this.head = new Node(value);
        this.tail = this.head;
    } else {
        var temp = new Node(value);
        temp.next = this.head;
        this.head.prev = temp;
        this.head = temp;
    }
};

DoublyLinkedList.prototype.addAtEnd = function(value) {
	if (this.tail === null) {  //If first node
        this.tail = new Node(value);
        this.head = this.tail;
    } else {
        var temp = new Node(value);
        temp.prev = this.tail;
        this.tail.next = temp;
        this.tail = temp;
    }

};
DoublyLinkedList.prototype.removeAtHead = function() {
	var toReturn = null;

        if (this.head !== null) {
            toReturn = this.head.data;

            if (this.tail === this.head) {
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head.next;
                this.head.prev = null;
            }
        }
        return toReturn;
};

DoublyLinkedList.prototype.removeAtTail = function() {
	var toReturn = null;

    if (this.tail !== null) {
        toReturn = this.tail.data;

        if (this.tail === this.head) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
    }

    return toReturn;
};

DoublyLinkedList.prototype.each = function (func) {
    var curr = this.head;
    while (curr !== null) {
	    func(curr);
        curr = curr.next;
    }
};

DoublyLinkedList.prototype.printList = function() {
    this.each( (item) => {
        console.log(item.data);
    });
};

var testList = new DoublyLinkedList();

testList.addAtFront({'test': 1});
testList.addAtEnd({'test': 2});
testList.addAtEnd({'test': 3});
testList.addAtEnd({'test': 4});

testList.printList(); // {'test': 1}, {'test': 2}, {'test': 3}, {'test': 4}
 
testList.removeAtHead();
testList.removeAtHead();
testList.removeAtTail();
testList.removeAtTail();

testList.printList();