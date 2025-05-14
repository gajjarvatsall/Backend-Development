// ===== 🧱 Object Creation =====
const person = {
  name: "Alice",
  age: 25,
  isStudent: false,
  hobbies: ["reading", "cycling"],
  address: {
    street: "123 Main St",
    city: "New York",
    zip: "10001"
  },
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
};

console.log("Initial Object:", person);

// ===== 🎯 Accessing Properties =====
console.log("Name:", person.name);               // Dot notation
console.log("City:", person.address.city);       // Nested access
console.log("First Hobby:", person["hobbies"][0]); // Bracket notation

// ===== ✍️ Modifying & Adding Properties =====
person.age = 26;                    // Update value
person["isStudent"] = true;        // Update using bracket
person.gender = "female";          // Add new property
console.log("Modified Object:", person);

// ===== ❌ Deleting Properties =====
delete person.isStudent;           // Remove property
console.log("After Deletion:", person);

// ===== 🚀 Object Methods =====
person.greet(); // Calls greet() method using `this`

// ===== 🔁 Looping Through Object =====
console.log("Iterating through object:");
for (let key in person) {
  // Skip function and nested object values for brevity
  if (typeof person[key] !== "function" && typeof person[key] !== "object") {
    console.log(`${key}: ${person[key]}`);
  }
}

// ===== 🧰 Object Utilities =====
console.log("Keys:", Object.keys(person));        // ["name", "age", "hobbies", "address", "gender", "greet"]
console.log("Values:", Object.values(person));    // Values of each key
console.log("Entries:", Object.entries(person));  // [[key, value], ...]

// ===== 🧬 Object Destructuring =====
const { name, age, gender } = person;
console.log(`Destructured: Name = ${name}, Age = ${age}, Gender = ${gender}`);

// ===== 🔁 Spread Operator (Clone / Merge) =====
const contact = { email: "alice@example.com", phone: "1234567890" };
const fullProfile = { ...person, ...contact }; // Merge two objects
console.log("Merged Object:", fullProfile);

// ===== 📤 Convert to JSON String & Back =====
const jsonString = JSON.stringify(fullProfile);       // Object to string
const parsedObject = JSON.parse(jsonString);          // String to object
console.log("JSON String:", jsonString);
console.log("Parsed Back:", parsedObject);

// ===== 📌 Check Property Existence =====
console.log("Has 'name'?", person.hasOwnProperty("name")); // true
console.log("'address' in person?", "address" in person);  // true
