//Sending requests to a remote API
const express = require('express');
const axios = require('axios');

const app = express();

app.get('/data', async (req, res) => {
  try {
    const response = await axios.get('https://example.com/api/data');
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data');
  }
});

app.listen(3000, () => {
  console.log('http://localhost:3000');
});