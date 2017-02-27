// Main
function DLLNode(key, data) {
    this.key = key;
    this.data = data;
    this.next = null;
    this.prev = null;
}

function LRUCache(capacity) {
    this.keys = {};
    this.capacity = capacity;
    this.size = 0;
    this.head = null;
}

LRUCache.prototype.set = function(key, value) {
    let node = new DLLNode(key, value);
    this.keys[key] = node;
    if (this.size == 0) {
        this.head = node;
    } else {
        this.insertHead(node);
    }
    this.size++;
};

LRUCache.prototype.insertHead = function(node) {
    let temp = this.head;
    this.head = node;
    node.next = temp;
    temp.prev = node;
};

LRUCache.prototype.get = function(key) {
    let node = this.keys[key];
    if (node.prev && node.next) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
        node.prev = null;
        node.next = null;
        this.insertHead(node);
    } else if (!node.next) {
        let temp = node.prev;
        temp.next = null;
        node.prev = null;
        this.insertHead(node);
    }
    return node.data;
}

LRUCache.prototype.evict = function() {
    let node = this.head,
        temp;

    while (node.next.next) {
        node = node.next;
    }
    temp = node.next;
    delete this.keys[temp.key];
    node.next = null
    this.size--;
};

LRUCache.prototype.print = function() {
    let node = this.head;
    while (node) {
        console.log(node.data)
        node = node.next;
    }
};
var myLRU = new LRUCache(5);

myLRU.set(1, 1);
myLRU.set(2, 2);
myLRU.set(3, 3);
myLRU.print(); // 1, 2, 3
myLRU.evict(); // pops the oldest element in cache out: 1
myLRU.print(); // 2, 3