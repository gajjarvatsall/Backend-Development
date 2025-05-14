// ===== 📦 Array Creation =====
let fruits = ["apple", "banana", "cherry"];
let emptyArray = []; // Empty array
let mixed = [1, "hello", true, null]; // Mixed types

console.log("Fruits:", fruits);
console.log("Empty:", emptyArray);
console.log("Mixed:", mixed);

// ===== 📍 Accessing Elements =====
console.log("First fruit:", fruits[0]);
console.log("Last fruit:", fruits[fruits.length - 1]);

// ===== ✍️ Modifying Elements =====
fruits[1] = "blueberry"; // Replace "banana" with "blueberry"
console.log("Updated Fruits:", fruits);

// ===== ➕ Adding & Removing Elements =====
fruits.push("date");        // Add to end
fruits.unshift("avocado");  // Add to start
console.log("After push & unshift:", fruits);

let removedLast = fruits.pop();     // Remove last
let removedFirst = fruits.shift();  // Remove first
console.log("Removed Last:", removedLast);
console.log("Removed First:", removedFirst);
console.log("After pop & shift:", fruits);

// ===== 🔄 Iterating Over Arrays =====
fruits.forEach((fruit, index) => {
  console.log(`Index ${index}: ${fruit}`);
});

// ===== 🛠️ Useful Array Methods =====
let numbers = [10, 20, 30, 40];

// map → transforms each element
let doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);

// filter → selects elements based on condition
let filtered = numbers.filter(num => num > 20);
console.log("Filtered (>20):", filtered);

// reduce → accumulate to single value
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log("Sum:", sum);

// includes → check presence
console.log("Includes 20?", numbers.includes(20)); // true

// indexOf → find position
console.log("Index of 30:", numbers.indexOf(30)); // 2

// find → first match
let found = numbers.find(num => num > 25);
console.log("First >25:", found);

// some / every
console.log("Any >35?", numbers.some(num => num > 35)); // true
console.log("All >5?", numbers.every(num => num > 5)); // true

// slice → non-mutating sub-array
let sliced = numbers.slice(1, 3); // [20, 30]
console.log("Sliced:", sliced);

// splice → mutate array (add/remove at index)
let spliced = numbers.splice(2, 1, 25); // removes 30, adds 25
console.log("Spliced Value:", spliced);
console.log("After Splice:", numbers);

// ===== 🔁 Spread & Destructuring =====
let moreFruits = [...fruits, "elderberry"];
console.log("Spread Combined:", moreFruits);

let [first, second, ...rest] = moreFruits;
console.log("First:", first, "Second:", second, "Rest:", rest);

// ===== 🔡 Sorting & Reversing =====
let nums = [4, 2, 8, 1];
nums.sort((a, b) => a - b); // Ascending numeric sort
console.log("Sorted Asc:", nums);

nums.reverse();
console.log("Reversed:", nums);

// ===== 🧹 Clearing Array =====
let clearMe = [1, 2, 3];
clearMe.length = 0; // Clean and efficient
console.log("Cleared:", clearMe);

// ===== Merging Two Arrays =====
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let merged = [...arr1, ...arr2]; // Spread both arrays
console.log("Merged with spread:", merged); // [1, 2, 3, 4, 5, 6]

const myarr = [2,3,4,23,45,[2,3,4,2],455,[543,434,2,3,5,6,[3,2,4,5,],5],6]

const temparr = myarr.flat(Infinity)
console.log(temparr);
