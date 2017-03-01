// Main
// Generalized Graph
function GraphClass() {
    this.V = 0; // number of vertices
    this.E = 0; // number of edges
    this.edges = [];
    this.vertices = [];
}

GraphClass.prototype.addEdge = function(vertex1, vertex2) {
    this.E++; // increment the number of edges

    this.edges[vertex1].push(vertex2);
    this.edges[vertex2].push(vertex1);
}

GraphClass.prototype.addVertex = function(vertex) {
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
        this.cleanUpEdgesArray(vertex1);
    }
    if (~index2) {
        this.edges[vertex2].splice(index2, 1);
        this.cleanUpEdgesArray(vertex2);
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

GraphClass.prototype.cleanUpEdgesArray = function(vertex) {
    if (this.edges[vertex].length == 0) {
        delete this.edges[vertex];
    }
}

GraphClass.prototype.traverseBFS = function(vertex, fn) {

    if (!~this.vertices.indexOf(vertex)) {
        return false; // vertex is not found
    }

    var queue = [];
    queue.push(vertex);
    var visited = [];
    visited[vertex] = true;

    while (queue.length) {
        vertex = queue.shift();
        fn(vertex);
        for (var i = 0; i < this.edges[vertex].length; i++) {
            if (!visited[this.edges[vertex][i]]) {
                visited[this.edges[vertex][i]] = true;
                queue.push(this.edges[vertex][i]);
            }
        }
    }
};

GraphClass.prototype.traverseDFS = function(vertex, fn) {
    if (!~this.vertices.indexOf(vertex)) {
        return console.log('Vertex not found');
    }
    var visited = [];
    this._traverseDFS(vertex, visited, fn);
};

GraphClass.prototype._traverseDFS = function(vertex, visited, fn) {
    visited[vertex] = true;
    if (this.edges[vertex] !== undefined) {
        fn(vertex);
    }
    for (var i = 0; i < this.edges[vertex].length; i++) {
        if (!visited[this.edges[vertex][i]]) {
            this._traverseDFS(this.edges[vertex][i], visited, fn);
        }
    }
};

var graph1 = new GraphClass();
graph1.addVertex(1);
graph1.addVertex(2);
graph1.addEdge(1, 2);
graph1.addVertex(3);
graph1.addVertex(4);
graph1.addVertex(5);
graph1.addEdge(3, 4);
graph1.addEdge(4, 5);
graph1.addEdge(1, 5);
graph1.addEdge(2, 3);
graph1.traverseDFS(1, (vertex) => {
    console.log(vertex);
}); // 1 2 3 4 5