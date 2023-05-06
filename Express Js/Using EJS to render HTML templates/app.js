//Using EJS to render HTML templates
const express=require('express');
const app=express();

app.set('view engine','ejs');
app.get('/',(req,res)=>{
  const courses=[
    "Javascript",
    "React Js",
    "Node Js",
    "Express Js"
  ]
  res.status(200).render('index',{
    docTitle:"Welcome To EJS",
    courses
  })
})

app.listen(3000,()=>{
  console.log('http://localhost:3000');
});