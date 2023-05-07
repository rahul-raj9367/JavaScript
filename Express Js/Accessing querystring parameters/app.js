//Accessing querystring parameters
const express=require('express');
const app=express();

app.get('/search', (req, res) => {
  const searchTerm = req.query.q;
  res.send(`Search term: ${searchTerm}`);
});
//http://localhost:3000/search?q=example

app.listen(3000,()=>{
  console.log('http://localhost:3000');
});