// 🔹 1. Basic Filtering — Even Numbers
const nums = [1, 2, 3, 4, 5, 6];
const evens = nums.filter(num => num % 2 === 0);
console.log('Even Numbers:', evens); // [2, 4, 6]

// 🔹 2. Filtering Objects — Active Users
const users = [
  { name: 'Alice', active: true },
  { name: 'Bob', active: false },
  { name: 'Charlie', active: true }
];

const activeUsers = users.filter(user => user.active);
console.log('Active Users:', activeUsers);
/*
[
  { name: 'Alice', active: true },
  { name: 'Charlie', active: true }
]
*/

// 🔹 3. Filtering by Search Keyword
const products = ['iPhone', 'iPad', 'MacBook', 'iMac'];
const searchTerm = 'Mac';
const filteredProducts = products.filter(p => p.includes(searchTerm));
console.log('Products Matching "Mac":', filteredProducts); // ['MacBook', 'iMac']

// 🔹 4. Filtering by Length
const words = ['cat', 'elephant', 'dog', 'giraffe'];
const longWords = words.filter(word => word.length > 4);
console.log('Long Words:', longWords); // ['elephant', 'giraffe']

// 🔹 5. Filtering Falsy Values (clean an array)
const dirtyArray = [0, "", null, undefined, "Hello", false, 42];
const cleanedArray = dirtyArray.filter(Boolean); // Removes all falsy values
console.log('Cleaned Array:', cleanedArray); // ['Hello', 42]

// 🔹 6. Filtering by Index (keep even indexes)
const colors = ['red', 'green', 'blue', 'yellow'];
const evenIndexColors = colors.filter((_, index) => index % 2 === 0);
console.log('Colors at Even Indexes:', evenIndexColors); // ['red', 'blue']
