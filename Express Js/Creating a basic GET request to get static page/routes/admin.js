const express =require('express');
const path=require('path');
const router = express.Router();

router.get('/add-product',(req,res)=>{
    res.sendFile(path.join(__dirname,'../','views','add-product.html'))
})
router.post('/add-product',(req,res)=>{
    console.log("Form Data",req.body);
    res.send('<b>Product Submited!</b>')
})


module.exports=router;