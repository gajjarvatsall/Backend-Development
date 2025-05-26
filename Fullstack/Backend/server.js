import express from 'express';

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/jokes',(req,res) => {
    const jokes = [
    {
      "id": 1,
      "title": "Why don't programmers like nature?",
      "content": "It has too many bugs."
    },
    {
      "id": 2,
      "title": "Why do Java developers wear glasses?",
      "content": "Because they don't see sharp."
    },
    {
      "id": 3,
      "title": "How many programmers does it take to change a light bulb?",
      "content": "None. That's a hardware problem."
    },
    {
      "id": 4,
      "title": "What's a programmer's favorite hangout place?",
      "content": "The Foo Bar."
    },
    {
      "id": 5,
      "title": "Why was the JavaScript developer sad?",
      "content": "Because he didn't know how to 'null' his feelings."
    }
  ];
    res.send(jokes);
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

