// ==================== 1. SYNTAX ====================
// Traditional Function
function add(a, b) {
  return a + b;
}

// Arrow Function
const addArrow = (a, b) => a + b;

console.log("Add (traditional):", add(2, 3));       // 5
console.log("Add (arrow):", addArrow(2, 3));       // 5


// ==================== 2. `this` Binding ====================
const user = {
  name: "LORD",

  // Traditional function has its own 'this'
  sayHi: function () {
    console.log("Traditional:", this.name); // LORD ✅
  },

  // Arrow function uses outer scope's 'this' (likely window/global)
  sayHiArrow: () => {
    console.log("Arrow:", this.name); // undefined ❌
  }
};

user.sayHi();
user.sayHiArrow();


// ==================== 3. `arguments` Object ====================
function normalArguments() {
  console.log("Traditional arguments:", arguments); // ✅ all passed args
}
normalArguments(1, 2, 3);

const arrowArguments = () => {
  // console.log(arguments); // ❌ ReferenceError
  console.log("Arrow can't use 'arguments'. Use rest params instead.");
};

arrowArguments();

const arrowWithRest = (...args) => {
  console.log("Arrow with rest:", args); // ✅ [4, 5, 6]
};
arrowWithRest(4, 5, 6);


// ==================== 4. Constructor Usage ====================
// Traditional Function can be used as constructor
function Person(name) {
  this.name = name;
}
const p1 = new Person("LORD");
console.log("Constructor (traditional):", p1.name); // LORD

// Arrow Function CANNOT be used as constructor
const Animal = (type) => {
  this.type = type;
};
// const a1 = new Animal("Dog"); // ❌ TypeError: Animal is not a constructor


// ==================== 5. Implicit Return ====================
const square = (n) => n * n; // No need for return keyword or braces
console.log("Square (arrow):", square(4)); // 16

const squareTraditional = function(n) {
  return n * n;
};
console.log("Square (traditional):", squareTraditional(4)); // 16


// ==================== 6. Use in Callbacks ====================
const numbers = [1, 2, 3, 4];

// With traditional function
const doubled1 = numbers.map(function(n) {
  return n * 2;
});

// With arrow function
const doubled2 = numbers.map(n => n * 2);

console.log("Doubled (traditional):", doubled1); // [2, 4, 6, 8]
console.log("Doubled (arrow):", doubled2);      // [2, 4, 6, 8]


// ==================== 7. Summary Output ====================
console.log(`
🔁 Summary:
- Arrow functions are shorter and inherit 'this' from the surrounding scope.
- Traditional functions have their own 'this', work with 'arguments', and can be constructors.
- Use arrow functions for callbacks, inline expressions, and lexical scoping.
- Use traditional functions when you need dynamic 'this', constructors, or full control.
`);
