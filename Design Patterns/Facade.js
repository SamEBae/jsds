var subSystem1 = function() {
    this.operation1 = function() {
        console.log("executing operation 1");
    }
}
var subSystem2 = function() {
    this.operation2 = function() {
        console.log("executing operation 2");
    }
}
var subSystem3 = function() {
    this.operation3 = function() {
        console.log("executing operation 3");
    }
}
var FacadeSystem = function() {
    this.subSystem1 = new subSystem1();
    this.subSystem2 = new subSystem2();
    this.subSystem3 = new subSystem3();

    // Start the subsystems in the constructor to run when created
    this.subSystem1.operation1();
    this.subSystem2.operation2();
    this.subSystem3.operation3();
}
var facadeSystem = new FacadeSystem();
// prints: "executing operation 1", "executing operation 2", "executing operation 3"