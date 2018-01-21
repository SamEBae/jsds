
function AdjacencyMatrix (vertexSize) {
	this.matrix = new Array(vertexSize);
	// create matrix
	for (var i=0; i<vertexSize; i++) {
		this.matrix.push(new Array(vertexSize));
	}
}

AdjacencyMatrix.prototype.addEdge = function(from, to) {
	this.matrix[from][to] = true;
};

AdjacencyMatrix.prototype.removeEdge = function(from, to) {
	this.matrix[from][to] = false;
};

AdjacencyMatrix.prototype.hasEdge = function(from, to) {
	return this.matrix[from][to];
};



var graph1 = [{from: 1, to: 4}, {from: 2, to: 3}, {from: 2, to: 4}, {from: 4, to: 5}, {from: 5, to: 3}, {from: 3, to: 1}];
var counter = 0;

for (var i=0, graphLength = graph1Length; i < graph1Length; i++ ) {
	
	counter++;
}