//Rendering a page layout with multiple views
const express= require('express');
const app=express();
const bodyparser=require('body-parser');
const path=require('path');

app.use(express.static(path.join(__dirname,'layout')));//static page
app.set('view engine','pug');
app.use(bodyparser.urlencoded());
app.get('/',(req,res)=>{
    res.status(200).render('index',{
        docTitle:"Home",
        welcome:" Welcome to Home Page"
    })
})
app.get('/about',(req,res)=>{
    res.status(200).render('about',{
        docTitle:"About",
        welcome:" Welcome to About Page"
    })
})
app.get('/Service',(req,res)=>{
    res.status(200).render('Service',{
        docTitle:"Service",
        welcome:" Welcome to Service Page"
    })
})
app.use((req,res)=>{
    res.status(404).render('404',{
        docTitle:"404",
        welcome:" Page Not Found"
    })
})
app.listen(3000,()=>{
    console.log("http://localhost:3000")
})