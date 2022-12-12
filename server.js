const todoapp =require('./index');
require('dotenv').config();


const port=process.env.port;

todoapp.listen(port,()=>{
    console.log("server runing on port",port)
})