// setTimeout - fires once
setTimeout(() => {
  console.log("👋 This runs once after 3 sec");
}, 3000);

// setInterval - fires repeatedly
const id = setInterval(() => {
  console.log("🔁 This runs every 2 sec");
}, 2000);

// Stop interval after 7 seconds
setTimeout(() => {
  clearInterval(id);
  console.log("🛑 Interval stopped");
}, 7000);
