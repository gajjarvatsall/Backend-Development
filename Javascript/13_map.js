// 🔹 1. Basic Transformation – Square Numbers
const numbers = [1, 2, 3, 4];
const squares = numbers.map(num => num * num);
console.log('Squared:', squares); // [1, 4, 9, 16]

// 🔹 2. Extract Specific Property from Array of Objects
const users = [
  { name: 'Alice', age: 21 },
  { name: 'Bob', age: 25 }
];

const names = users.map(user => user.name);
console.log('Names:', names); // ['Alice', 'Bob']

// 🔹 3. Add Custom Labels with Index
const fruits = ['apple', 'banana', 'cherry'];
const labeledFruits = fruits.map((fruit, index) => `${index + 1}. ${fruit}`);
console.log('Labeled Fruits:', labeledFruits); // ['1. apple', '2. banana', '3. cherry']

// 🔹 4. Modify Objects (e.g., Add Property)
const updatedUsers = users.map(user => ({
  ...user,
  isActive: true
}));
console.log('Updated Users:', updatedUsers);
/*
[
  { name: 'Alice', age: 21, isActive: true },
  { name: 'Bob', age: 25, isActive: true }
]
*/

// 🔹 5. Convert Strings to Uppercase
const tags = ['html', 'css', 'js'];
const upperTags = tags.map(tag => tag.toUpperCase());
console.log('Uppercase Tags:', upperTags); // ['HTML', 'CSS', 'JS']

// 🔹 6. Chaining with filter + map
const prices = [100, 200, 50, 400];
const discounted = prices
  .filter(price => price > 100)
  .map(price => price * 0.9); // Apply 10% discount
console.log('Discounted Prices:', discounted); // [180, 360]

// 🔹 7. Nested Mapping (2D arrays)
const matrix = [
  [1, 2],
  [3, 4]
];
const doubledMatrix = matrix.map(row => row.map(val => val * 2));
console.log('Doubled Matrix:', doubledMatrix); // [[2, 4], [6, 8]]
