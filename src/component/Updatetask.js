import React,{useState} from 'react'
import './Updatetask.css'
import axios from 'axios'
const Updatetask = (props) => {
    const [task,setTask] = useState(props.task.taskname)
    const updateTask = () => {
        if(task.trim() === '' || props.task.taskname === task){
            props.removePopup()
        } else {
            axios.put(`http://localhost:2000/update/${props.task._id}`,{
                _id : props.task._id,
                taskname : task,
                taskstatus : props.task.taskstatus
            }).then(res => {
                props.removePopup()
                props.updatetask(res.data)
            }).catch(err => console.log(err))
        }
    }
    return (
        <div className = 'popup'>
            <div className = 'popup-content'>
                <input type = 'text'  placeholder = 'Update Task . . .' value = {task} onChange = {event => setTask(event.target.value)}/>
                <button onClick = {() => updateTask()}>Update</button>
            </div>
        </div>
    )
}

export default Updatetask