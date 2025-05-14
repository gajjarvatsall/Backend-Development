// ===== 🔷 1. Function Declaration (Hoisted) =====
function greet(name) {
  return `Hello, ${name}`;
}
console.log(greet("LORD")); // Hello, LORD

// ===== 🔶 2. Function Expression (Not hoisted) =====
const add = function (a, b) {
  return a + b;
};
console.log("Add:", add(3, 5)); // 8

// ===== 🟡 3. Arrow Function (No own 'this') =====
const multiply = (x, y) => x * y;
console.log("Multiply:", multiply(2, 6)); // 12

// ===== 🟢 4. Default Parameters =====
function welcome(user = "Guest") {
  console.log(`Welcome, ${user}`);
}
welcome();           // Welcome, Guest
welcome("LORD");     // Welcome, LORD

// ===== 🔵 5. Rest Parameters =====
function sumAll(...nums) {
  return nums.reduce((total, n) => total + n, 0);
}
console.log("Sum All:", sumAll(1, 2, 3, 4)); // 10

// ===== 🟠 6. Callback Function Example =====
function processInput(callback) {
  const input = "LORD";
  callback(input);
}
processInput(function (name) {
  console.log("Callback says hello to", name); // Callback says hello to LORD
});

// ===== 🟣 7. Immediately Invoked Function Expression (IIFE) =====
(function () {
  console.log("IIFE executed immediately"); // IIFE executed immediately
})();

// ===== 🧪 8. Higher-Order Function (Returns a function) =====
function makePowerOf(n) {
  return function (x) {
    return x ** n;
  };
}
const square = makePowerOf(2);
console.log("Square of 5:", square(5)); // 25

// ===== 🧠 9. Function Returning Arrow Function =====
const makeAdder = (n) => (x) => x + n;
const add10 = makeAdder(10);
console.log("Add 10 to 7:", add10(7)); // 17

// ===== 🛠 10. Anonymous vs Named Function =====
const anon = function () {
  return "Anonymous function";
};

const named = function namedFunc() {
  return "Named function";
};

console.log(anon());  // Anonymous function
console.log(named()); // Named function

// ===== 🔄 11. Function as Object Property (Method) =====
const logger = {
  prefix: "[LOG]",
  print(message) {
    console.log(`${this.prefix} ${message}`);
  }
};
logger.print("This is a message"); // [LOG] This is a message
