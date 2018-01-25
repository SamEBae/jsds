function Graph (vertices) {
	this.graph = {};
	this.vertices = vertices;
}

Graph.prototype.addEdge = function(u,v) {
	if (!this.graph[u])
		this.graph[u] = [v];
	else
		this.graph[u].push(v);
};

Graph.prototype.topologicalSortUtil = function(v, visited, stack) {
	visited[v] = true;

	for (var i in this.graph[v]) {
		if (visited[i] == false) {
			this.topologicalSortUtil(i, visited, stack)
		}
	}
	stack.unshift(v);
};

Graph.prototype.topologicalSort = function() {
	var visited = [],
		stack 	= [];

	for (var i=0; i < this.vertices; i++) {
		visited.push(false);
	}

	for (var i=0; i < this.vertices; i++) {
		if (visited[i] == false) {
			this.topologicalSortUtil(i, visited, stack)
		}
	}
	return stack;
};

var g = new Graph(6);
g.addEdge(5, 2);
g.addEdge(5, 0);
g.addEdge(4, 0);
g.addEdge(4, 1);
g.addEdge(2, 3);
g.addEdge(3, 1);
var topologicalOrder = g.topologicalSort();

console.log(topologicalOrder);