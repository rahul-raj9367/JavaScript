//Parsing URLs for dynamic routes
const express=require('express');
const app=express();


app.get('/',(req,res)=> {
  res.status(200).send('Welcome Home Page')
});

app.get('/about',(req,res)=> {
  res.status(200).send('Welcome About Page')
});

app.get('/service',(req,res)=> {
  res.status(200).send('Welcome service Page')
});

app.use((req,res)=>{
  res.status(404).send('Page Not Found')
})

app.listen(3000,()=>{
  console.log('http://localhost:3000');
});