// 🔹 Select Elements
const title = document.getElementById("title");
const description = document.querySelector("#description");
const updateBtn = document.getElementById("updateBtn");
const addBtn = document.getElementById("addBtn");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

// 🔹 Read + Modify Content
updateBtn.addEventListener("click", () => {
  description.innerText = "Text has been updated!";
  title.classList.add("highlight"); // Add a class for styling
});

// 🔹 Create + Append Element
addBtn.addEventListener("click", () => {
  const task = document.createElement("li");      // Create new list item
  task.innerText = todoInput.value || "Empty";    // Add input or default text
  todoList.appendChild(task);                     // Append to list
  todoInput.value = "";                           // Clear input
});

// 🔹 Change Attribute + Style
title.setAttribute("data-role", "header");
title.style.textTransform = "uppercase";

// 🔹 DOM Traversal Example
const firstItem = todoList.firstElementChild;
console.log("First Item:", firstItem.innerText);

const allItems = todoList.children;
for (let item of allItems) {
  item.style.color = "blue";
}

// 🔹 Remove an item on click (Event Delegation)
todoList.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    todoList.removeChild(e.target); // Remove clicked list item
  }
});
