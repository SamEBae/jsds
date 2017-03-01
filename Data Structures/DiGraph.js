// Helpers
Array.prototype.contains = function(name) {
    let i = this.length;
    while (i--) {
        if (this[i].name === name) {
            return true;
        }
    }
    return false;
};
function Node(name) {
    this.edges = [];
    this.name = name;
};

Node.prototype.addEdge = function(end) {
    this.edges.push(end);
};

// Main
function DirectedGraph() {
    this.vertices = [];
};

DirectedGraph.prototype.addEdge = function(start, end) {
    const first = this.vertices.contains(start);
    const second = this.vertices.contains(end);

    if (first) {
        //get start node
        var i = this.vertices.length;
        while (i--) {
            if (this.vertices[i].name === start) {
                this.vertices[i].addEdge(end);
                break;
            }
        }
    }
    if (second) {
        //get end node
        i = this.vertices.length;
        while (i--) {
            if (this.vertices[i].name === end) {
                this.vertices[i].addEdge(start);
                break;
            }
        }
    }

    if ((!first) || (!second)) {
        if (!first) {
            const node = new Node(start);
            node.addEdge(end);
            this.vertices.push(node);
        }
        if (!second) {
            const node = new Node(end);
            node.addEdge(start);
            this.vertices.push(node);
        }
    }
};

DirectedGraph.prototype.printNodes = function() {
    for (var i = 0; i < this.vertices.length; i++) {
        console.log(this.vertices[i].name + ":");
        console.log(this.vertices[i].edges);
    }
};
var digraph1 = new DirectedGraph();

digraph1.addEdge("A", "B");
digraph1.addEdge("B", "C");
digraph1.addEdge("C", "A");
digraph1.printNodes();
// A: B, C
// B: A, C
// C: B, A