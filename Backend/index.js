require('dotenv').config()
// Import the Express library
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define the port number the server will listen on
const port = 3000;

// Define a route for the root URL ("/")
// When a GET request is made to "/", send "Hello World!" as the response
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/radhe',(req,res) => {
    res.send('<h1>Hari Bol !!!</h1>');
})

// Start the server and make it listen on the specified port
// Once the server is running, log a message to the console
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
