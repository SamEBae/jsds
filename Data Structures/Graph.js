// Helper
function _extractMin(Q, dist) {
    var minimumDistance = Infinity;
    var nodeWithMinimumDistance;

    for (var node in Q) {
        if (dist[node] <= minimumDistance) {
            minimumDistance = dist[node];
            nodeWithMinimumDistance = node;
        }
    }
    return nodeWithMinimumDistance;
}

// Main
var Graphs = function() {
    this.vertices = {};
};

Graphs.prototype.add = function(name, edges) {
    edges = edges || null;
    this.vertices[name] = edges;
};

Graphs.prototype.length = function(u, v) {
    return (this.vertices[u][v]);
};

// Dijkstra's algorithm is an algorithm for finding the shortest paths between nodes in a graph

Graphs.prototype.Dijkstra = function(source) {
    // create vertex set Q
    var Q = {},
        dist = {},
        prev = {};

    for (var vertex in this.vertices) {
        // unknown distance set to Infinity
        dist[vertex] = Infinity;
        prev[vertex] = undefined;
        // add v to Q
        Q[vertex] = this.vertices[vertex];
    }
    // Distance from source to source init to 0
    dist[source] = 0;

    // while Q is not empty:
    while (!_isEmpty(Q)) {
        // u ← vertex in Q with min dist[u]    
        var u = _extractMin(Q, dist);

        // remove u from Q
        delete Q[u];

        // for each neighbor v of u:
        // where v is still in Q.
        for (var neighbor in this.vertices[u]) {
            // alt ← dist[u] + length(u, v)
            var alt = dist[u] + G.length(u, neighbor);

            // A shorter path to neighbor has been found
            if (alt < dist[neighbor]) {
                dist[neighbor] = alt;
                prev[neighbor] = u;
            }
        }
    }
    return dist;
};

// Usage
var G = new Graphs();
G.add('S', {
    V: 1,
    W: 4
});
G.add('W', {
    T: 3
});
G.add('V', {
    W: 2,
    T: 6
});
G.add('T');
console.log(G.Dijkstra('S')); // {"S": 0, "T":6, "V":1, "W": 3}