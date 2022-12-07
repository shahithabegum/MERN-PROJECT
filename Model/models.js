const mongoose=require('mongoose');
const TaskSchema=new mongoose.Schema({
   taskname:{
      type : String,
      required:true
   },
   taskstatus:{
      type : Boolean,
      required: true
   }
})
const Task=mongoose.model('task',TaskSchema)
module.exports=Task;