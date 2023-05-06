const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.send('Hello, world!');
});

router.get('/users', (req, res) => {
    res.send('User list');
});

module.exports=router;