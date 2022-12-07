import './Add.css';
import React,{useState} from 'react'
import axios from 'axios'
const Add = () => {
    const [task, settask] = useState("");

    const addtask=(props) =>{
        if(task.trim() === ''){
            return
        }
        else{
           
            axios.post('http://localhost:2000/add',{taskname:task,taskstatus:false}).then(res=>{
                settask("");
                props.addtask(res.data)
            }).catch(err=>{
                console.log(err)
            })
        }
    }
  return (
    <div className='addtask'>
        <input type='text' placeholder='Add Task...' value={task} onChange={(e)=>settask(e.target.value)} />
        <button onClick={()=>addtask()}>Add Task</button>
    </div>
  )
}

export default Add