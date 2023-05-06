//Creating a basic GET request to get static page
const express= require('express');
const app=express();
const bodyparser=require('body-parser');
const adminRouter=require('./routes/admin');
const shopRouter=require('./routes/shop');
const path=require('path');


app.use(bodyparser.urlencoded())
app.use(adminRouter);//middleware
app.use(shopRouter);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

app.listen(3000,()=>{
    console.log("http://localhost:3000/add-product")
})