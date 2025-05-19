// ES5 STYLE - USING FUNCTION + PROTOTYPE

function Animal(name) {
  this.name = name;
}

Animal.prototype.sayHi = function () {
  console.log("Hi, I am " + this.name);
};

function Dog(name, breed) {
  Animal.call(this, name); // inherit property
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype); // inherit methods
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  console.log(this.name + " barks!");
};

const dog1 = new Dog("Bruno", "Labrador");
dog1.sayHi();   // Hi, I am Bruno
dog1.bark();    // Bruno barks!


// ES6 STYLE - USING CLASS

class AnimalClass {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }
}

class DogClass extends AnimalClass {
  constructor(name, breed) {
    super(name); // inherit parent constructor
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} barks!`);
  }
}

const dog2 = new DogClass("Rocky", "Beagle");
dog2.sayHi();   // Hi, I am Rocky
dog2.bark();    // Rocky barks!


// UNDER THE HOOD CHECKS
console.log(dog1 instanceof Dog); // true
console.log(dog1 instanceof Animal); // true
console.log(dog2 instanceof DogClass); // true
console.log(dog2 instanceof AnimalClass); // true

console.log(Object.getPrototypeOf(dog1)); // Dog.prototype
console.log(Object.getPrototypeOf(dog2)); // DogClass.prototype
