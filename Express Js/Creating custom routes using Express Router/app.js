//Creating custom routes using Express Router
const express=require('express');
const app=express();
const customRouter=require('./Routes');
app.use('/',customRouter);//middleware


app.listen(3000,()=>{
  console.log('http://localhost:3000');
});
