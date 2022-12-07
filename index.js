const express=require('express');
const app=express();
//router
const router=require('./Routers/routes')
const cors=require('cors');
app.use(cors())
//body-parser
const bodyParser=require('body-parser')

//middleware
app.use(bodyParser.json())
const morgan=require('morgan');
app.use('/',router);
app.use(morgan('dev'))
//db connection
require('dotenv/config');
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/todolist',(err)=>{
if(err){
    console.log("db not connected.....!!!!")
}
else{console.log("wow...shaju ...  db  connected.....!!!!")}

})

module.exports= app;