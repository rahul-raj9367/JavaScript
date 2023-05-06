//Creating custom error handling middleware
const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  try {
    // do something that may throw an error
    throw new Error('Something went wrong');
    res.send('Hello, world!');
  } catch (err) {
    next(err);
  }
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Something broke!');
});

app.listen(3000, () => {
  console.log('http://localhost:3000');
});