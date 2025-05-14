// Absolute value
console.log("Math.abs(-10):", Math.abs(-10)); // 10

// Rounding up
console.log("Math.ceil(4.2):", Math.ceil(4.2)); // 5

// Rounding down
console.log("Math.floor(4.8):", Math.floor(4.8)); // 4

// Rounding to nearest integer
console.log("Math.round(4.5):", Math.round(4.5)); // 5
console.log("Math.round(4.4):", Math.round(4.4)); // 4

// Removing the decimal part
console.log("Math.trunc(4.9):", Math.trunc(4.9)); // 4

// Finding max and min from a list
console.log("Math.max(3, 7, -2, 8):", Math.max(3, 7, -2, 8)); // 8
console.log("Math.min(3, 7, -2, 8):", Math.min(3, 7, -2, 8)); // -2

// Exponents and roots
console.log("Math.pow(2, 3):", Math.pow(2, 3)); // 8
console.log("Math.sqrt(16):", Math.sqrt(16)); // 4

// Getting a random number between 0 and 1
console.log("Math.random():", Math.random()); // e.g., 0.347...

// Random number between two values (e.g., 5 and 10)
let min = 5;
let max = 10;
let randomInRange = min + Math.random() * (max - min);
console.log(`Random between ${min} and ${max}:`, randomInRange);

// Using Math constants
console.log("Math.PI:", Math.PI); // 3.141592653589793

// Trigonometric function (in radians)
console.log("Math.sin(Math.PI / 2):", Math.sin(Math.PI / 2)); // 1

// Natural logarithm
console.log("Math.log(1):", Math.log(1)); // 0
console.log("Math.log(Math.E):", Math.log(Math.E)); // 1

// Base-10 and base-2 logarithms
console.log("Math.log10(1000):", Math.log10(1000)); // 3
console.log("Math.log2(8):", Math.log2(8)); // 3
