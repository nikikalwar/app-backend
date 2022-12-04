var express = require('express');
var router = express.Router();
const Users=require('../models/userModel');
console.log("first",process.pid,process.ppid);

router.post('/login-user',async(req,res)=>{
    console.log("second",process.pid,process.ppid);
   // console.log(req.body);
   try{
    let {email}=req.body;
    console.log(email);
    let p=await Users.find({email:`${email}`});
    console.log(p);
    console.log("third",process.pid,process.ppid);
    if(p.length===0) return res.status(200).send({"msg":"user not found"})
    else return res.status(200).send("User details here");
    //now place the comparison logic in here
   }catch(err){console.log(err,"error here")}
   
})

router.post('/save-user',async(req,res)=>{
    console.log("fourth",process.pid,process.ppid);
   // console.log(req.body);
    let {email}=req.body;
   // console.log(email);
    let emailExists=await Users.find({email:`${email}`});
    console.log(emailExists,"user found");
    if(emailExists.length){
        return res.send({'message':'user exists'})
    }
    let p=new Users(req.body);
    let data=await p.save();
   // console.log(data)
    res.send({'message':'success'})
})

  module.exports = router;