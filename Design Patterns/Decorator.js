// Animal constructor
function Animal(animalType) {
    this.animalType = animalType;
    this.color = "black";
}

// Test instance for a basic Animal
var testInstance = new Animal("Dog");
console.log(testInstance); // { animalType: "dog", color: 'black'} 

// Lets create a new instance of Animal to be decorated as Cat
var cat = new Animal("Cat");
cat.setColor = function(color) {
    this.color = color;
}

// Test the value setters and value assignment works correctly
cat.setColor("blue");
console.log(cat); // prints { animalType: "dog", color: "blue" }