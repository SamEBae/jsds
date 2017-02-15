function SingletonObject() {
    this.name = "Sample Singlteon";
}

function SingletonLayer() {
    this._instance = null;
}

SingletonLayer.prototype.getInstance = function() {
    if (!this._instance)
        this._instance = new SingletonObject();
    return this._instance;
}

var layer = new SingletonLayer(),
    instance1 = layer.getInstance();

console.log(instance1); // {name: "Sample Singlteon"}
// change the instance
instance1['prop_add'] = true;
console.log(instance1); // {name: "Sample Singlteon", prop_add: true}

var instance2 = layer.getInstance();
console.log(instance2); // {name: "Sample Singlteon", prop_add: true}