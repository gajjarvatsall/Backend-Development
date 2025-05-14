// ===== 📆 Creating Date Objects =====
let now = new Date(); // Current date and time
let specificDate = new Date("2023-12-25"); // From ISO date string
let fromParts = new Date(2023, 11, 25, 10, 30); // Year, Month (0-indexed), Day, Hour, Minute

console.log("Now:", now);
console.log("Specific Date:", specificDate);
console.log("From Parts:", fromParts);

// ===== 🔍 Getting Components =====
console.log("Year:", now.getFullYear());          // 2025
console.log("Month (0-11):", now.getMonth());     // 0 = Jan, 11 = Dec
console.log("Date:", now.getDate());              // Day of the month
console.log("Day (0-6):", now.getDay());          // 0 = Sunday
console.log("Hours:", now.getHours());            // 0-23
console.log("Minutes:", now.getMinutes());
console.log("Seconds:", now.getSeconds());
console.log("Milliseconds:", now.getMilliseconds());

// ===== 🛠️ Setting Components =====
let updateDate = new Date();
updateDate.setFullYear(2024);
updateDate.setMonth(0);      // January
updateDate.setDate(15);      // 15th
updateDate.setHours(9);
updateDate.setMinutes(45);
console.log("Updated Date:", updateDate);

// ===== 🕒 Timestamps =====
console.log("Unix Timestamp (ms):", now.getTime());  // ms since Jan 1, 1970
console.log("Date.now():", Date.now());              // Same as above but static

// ===== ➕ Date Arithmetic =====
let futureDate = new Date();
futureDate.setDate(futureDate.getDate() + 7);  // Add 7 days
console.log("Date after 7 days:", futureDate);

// Difference in days between two dates
let start = new Date("2025-12-01");
let end = new Date("2025-12-31");
let diffMs = end - start;
let diffDays = diffMs / (1000 * 60 * 60 * 24); // Convert ms to days
console.log("Difference in days:", diffDays);

// ===== 🧾 Formatting =====
console.log("toString():", now.toString());                       // Full string
console.log("toDateString():", now.toDateString());               // Date only
console.log("toISOString():", now.toISOString());                 // ISO format
console.log("toLocaleDateString():", now.toLocaleDateString());  // Locale-based date
console.log("toLocaleTimeString():", now.toLocaleTimeString());  // Locale-based time
console.log("toLocaleString():", now.toLocaleString('default',{
    weekday: 'long'
}));  // custom local String
