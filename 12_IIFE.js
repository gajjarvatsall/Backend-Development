// 🌀 IIFE (Immediately Invoked Function Expression) in 
// JavaScript

// An IIFE is a function that runs immediately after it’s 
// defined. It’s a powerful JavaScript pattern for 
// isolating code, avoiding global scope pollution, 
// and creating private variables.

// =================== 1. BASIC IIFE ===================
// Immediately runs on definition
(function () {
  console.log("✅ Basic IIFE executed!");
})();

// Arrow function version
(() => {
  console.log("✅ Arrow function IIFE executed!");
})();


// =================== 2. AVOIDING GLOBAL POLLUTION ===================
var globalVar = "Global Scope";

(function () {
  var localVar = "IIFE Scope";
  console.log("Inside IIFE:", localVar); // IIFE Scope
})();

console.log("Outside IIFE:", globalVar);  // Global Scope
// console.log(localVar); // ❌ ReferenceError


// =================== 3. ONE-TIME INITIALIZATION ===================
const CONFIG = (() => {
  const secretKey = "abc123"; // private, can't be accessed outside
  const apiUrl = "https://api.example.com";

  console.log("⚙️ Config loaded...");

  return {
    apiUrl
    // secretKey is hidden!
  };
})();

console.log("Config:", CONFIG.apiUrl); // ✅ Accessible
// console.log(CONFIG.secretKey); // ❌ undefined


// =================== 4. PRIVATE VARIABLES WITH RETURN OBJECT ===================
const counter = (function () {
  let count = 0; // This is private to the function

  return {
    increment: () => ++count,
    reset: () => { count = 0; },
    get: () => count
  };
})();

console.log("🔢 Counter:", counter.increment()); // 1
console.log("🔢 Counter:", counter.increment()); // 2
counter.reset();
console.log("🔢 Counter after reset:", counter.get()); // 0


// =================== 5. LOOP CLOSURE WITH IIFE (ES5 Pattern) ===================
console.log("🔁 Loop with IIFE:");
for (var i = 0; i < 3; i++) {
  (function(index) {
    setTimeout(() => {
      console.log("IIFE Loop Index:", index);
    }, 100);
  })(i);
}
// Output: 0, 1, 2

// Without IIFE, you'd get: 3, 3, 3 (due to var hoisting)


// =================== 6. COMPARISON WITH MODULES ===================
// In modern JavaScript, modules (`import/export`) provide scoped code.
// IIFE was the go-to before modules were standardized.

// Example structure:
// (function () {
//   // Module logic here
// })();


// =================== 7. TL;DR OUTPUT ===================
console.log(`
🧠 IIFE Summary:
- Self-invoking function expressions.
- Avoid polluting global scope.
- Useful for private variables and config.
- Simulates encapsulation.
- Used heavily before ES6 modules.
`);
