// Base constructor
function Person(name) {
  this.name = name;
}

// Add method to prototype
Person.prototype.sayHello = function () {
  console.log(`Hello, I am ${this.name}`);
};

// Inheritance using prototype chain
function Developer(name, language) {
  Person.call(this, name); // Call base constructor
  this.language = language;
}

// Inherit prototype
Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;

// Extend Developer
Developer.prototype.code = function () {
  console.log(`${this.name} is coding in ${this.language}`);
};

// Add method to Array prototype (demo purpose only)
Array.prototype.last = function () {
  return this[this.length - 1];
};

// Create instance
const dev = new Developer("LORD", "JavaScript");

console.log("Instance checks:");
console.log(dev instanceof Developer); // true
console.log(dev instanceof Person);    // true

console.log("\nMethod calls:");
dev.sayHello(); // Inherited from Person
dev.code();     // Defined in Developer

console.log("\nPrototype chain:");
console.log(Object.getPrototypeOf(dev) === Developer.prototype);         // true
console.log(Object.getPrototypeOf(Developer.prototype) === Person.prototype); // true

console.log("\nUsing custom Array method:");
const arr = [10, 20, 30];
console.log("Last element:", arr.last()); // 30

// ------------------
// Now the ES6 class equivalent
// ------------------

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Spike");
dog.speak(); // from Animal
dog.bark();  // from Dog

// Confirm prototype chain
console.log("\nClass prototype chain:");
console.log(Object.getPrototypeOf(Dog.prototype) === Animal.prototype); // true
console.log(dog instanceof Dog);    // true
console.log(dog instanceof Animal); // true
