function observable() {
    this.observers = []; // list of observer objects
}

observable.prototype.attach = function(observer) {
    this.observers.push(observer);
}

observable.prototype.detach = function(observer) {
    for (var i in this.observers) {
        if (this.observers[i] == observer) {
            this.observers.splice(i, 1);
            break;
        }
    }
}

observable.prototype.notify = function() {
    for (i in this.observers) {
        this.observers[i].update();
    }
}

function observer(name) {
    this.name = name;
    this.update = function() {
        console.log(this.name + " got updated");
    }
}

var obs = new observable();
var ob1 = new observer("name");
var ob2 = new observer("name2");

obs.attach(ob1);
obs.attach(ob2);
// obs = {observers: [{name: 'name', update:...}, {name: 'name2', update: ...}]}

obs.notify();
// prints 'name got updated'. 'name2 got updated'
obs.detach(ob2);
//obs = {observers: [{name: 'name', update:...}, {name: 'name2', update: ...}]}
obs.notify();
// prints 'name got updated'