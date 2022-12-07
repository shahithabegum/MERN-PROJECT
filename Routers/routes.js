const express=require('express');

const routes=express.Router();
const Task=require('../Model/models')
//create api
routes.post('/add', (req,res)=>{
    const addtask= new Task({
        taskname:req.body.taskname,
        taskstatus:req.body.taskstatus
    })
    console.log(req.body.todo)
    addtask.save((err,doc)=>{
        if(err) console.log(err)
        res.json(doc)
    })
       
})
//get all api
routes.get('/',async(req,res)=>{
    const getall=await Task.find()
   res.status(200).json(getall)
})
//update api
routes.put('/update/:id',async (req,res)=>{
      const updatetask=await Task.updateOne({_id:req.params.id},{$set:{taskname:req.body.taskname,taskstatus:req.body.taskstatus}});
      console.log(req.body.taskname)
      console.log(req.body.taskstatus)
      res.json(updatetask)
})
//getbyid
routes.get('/:id',async (req,res)=>{
    const getTaskbyid= await Task.findById(req.params.id);
    res.status(200).json(getTaskbyid)
})
//delete
routes.delete('/:id',async (req,res)=>{
    const deleteperson= await Task.remove({_id:req.params.id});
    res.status(200).json(deleteperson)
})

module.exports=routes;