// Class that supports O(1) for insert, delete, search, random for integers
function ConstantTimeInsertDeleteSearchRandom() {
	this.hash = {};
	this.arr  = [];	
}

ConstantTimeInsertDeleteSearchRandom.prototype.insert = function(intVal) {
	this.arr.push(intVal);
	this.hash[intVal] = this.arr.length - 1; // store the index
};

ConstantTimeInsertDeleteSearchRandom.prototype.delete = function(intVal) {
	let index = this.hash[intVal];
	this.arr.splice(index, 1);
	delete this.hash[intVal];
};

ConstantTimeInsertDeleteSearchRandom.prototype.search = function(intVal) {
	return this.hash[intVal] != undefined;
};

ConstantTimeInsertDeleteSearchRandom.prototype.random = function() {
	let randomIndex = Math.round(Math.random()*this.arr.length)-1;
	return this.arr[randomIndex];
};