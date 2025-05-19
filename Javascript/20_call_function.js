const user1 = {
  name: "LORD",
};

const user2 = {
  name: "CodeMaster",
};

function greet(message) {
  console.log(`${message}, ${this.name}`);
}

// Normally, `this` is undefined in global scope
greet("Hello"); // Hello, undefined ❌

// Using .call() to bind `this` to user1
greet.call(user1, "Hello"); // ✅ Hello, LORD

// Using .call() to bind `this` to user2
greet.call(user2, "Hey"); // ✅ Hey, CodeMaster
