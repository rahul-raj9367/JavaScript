//Serving static files from a directory
const express=require('express');
const path=require('path');
const app=express();

//Serving static files from a directory
app.use(express.static(path.join(__dirname,'public')));

app.set('view engine','pug')

app.get('/',(req,res)=>{
  res.status(200).render('index',{
    docTitle:"Welcome",
    welcome:"Serving static files from a directory",
  })
})
app.listen(3000,()=>{
  console.log('http://localhost:3000');
});