var express = require('express');
var router = express.Router();
const Users=require('../models/userModel');


router.post('/login-user',async(req,res)=>{
    console.log(req.body);
   try{
    let {email}=req.body;
    console.log(email);
    let p=await Users.find({email:`${email}`});
    console.log(p);
    if(p.length===0) return res.status(200).send({"msg":"user not found"})
    else return res.status(200).send("User details here");
    //now place the comparison logic in here
   }catch(err){console.log(err,"error here")}
   
})

router.post('/save-user',async(req,res)=>{
    console.log(req.body);
    let p=new Users(req.body);
    let data=await p.save();
    console.log(data)
    res.send({'message':'Success'})
})

  module.exports = router;