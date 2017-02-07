// Constructor for GraphClass
function GraphClass() {
    this.V = 0; // number of vertices
    this.E = 0; // number of edges
    this.edges = []; 
    this.vertices = [];
}

GraphClass.prototype.addEdge = function(vertex1,vertex2) {
    this.E++; // increment the number of edges

    this.edges[vertex1].push(vertex2);
    this.edges[vertex2].push(vertex1);
}

GraphClass.prototype.addVertex = function (vertex) {
    this.V++; // increment the number of vertices

    this.vertices.push(vertex);
    this.edges[vertex] = [];
}

GraphClass.prototype.removeEdge = function(vertex1, vertex2) {
    var index1 = this.edges[vertex1] ? this.edges[vertex1].indexOf(vertex2) : -1;
    var index2 = this.edges[vertex2] ? this.edges[vertex2].indexOf(vertex1) : -1;
    if (~index1) {
        this.edges[vertex1].splice(index1, 1);
        this.E--; // decrement the number of edges
    }
    if (~index2) {
        this.edges[vertex2].splice(index2, 1);
    }
};

GraphClass.prototype.removeVertex = function(vertex) {
    var index = this.vertices.indexOf(vertex);
    if (~index) {
        this.vertices.splice(index, 1);
    }
    while (this.edges[vertex].length) {
        var adjacentVertex = this.edges[vertex].pop();
        this.removeEdge(adjacentVertex, vertex);
    }
    this.V--; // decrement the number of vertices
};

module.exports = GraphClass;