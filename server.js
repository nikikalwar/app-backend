const express=require('express');
const app=express();
const bodyParser=require('body-parser')
const cors = require('cors');
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/user-save',(req,res)=>{
    console.log("get request received");
    console.log(req.body)
    res.send("Hi there")
})

app.listen(3006,()=>{
    console.log("port ruunning at 3006")
})