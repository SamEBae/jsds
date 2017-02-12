// Main
// Class for customer
function Customer(name, order) {
    this.name = name;
    this.order = order;
}

// Class for cashier
function Cashier() {
    this.customers = [];
}

Cashier.prototype.addOrder = function(customer) {
    this.customers.push(customer);
}

Cashier.prototype.deliverOrder = function() {
    var finishedCustomer = this.customers.shift();

    console.log(finishedCustomer.name + ", your " + finishedCustomer.order + " is ready!");
}

var cashier = new Cashier();
var customer1 = new Customer('Jim', "Fries");
var customer2 = new Customer('Sammie', "Burger");
var customer3 = new Customer('Peter', "Drink");

cashier.addOrder(customer1);
cashier.addOrder(customer2);
cashier.addOrder(customer3);

cashier.deliverOrder(); // Jim, your Fries is ready!
cashier.deliverOrder(); // Sammie, your Burger is ready!
cashier.deliverOrder(); // Peter, your Drink is ready!