const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const userRouter=require('./routes/user');

const cors = require('cors');
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/users', userRouter);
app.listen(3006,()=>{
    console.log("port ruunning at 3006")
})

