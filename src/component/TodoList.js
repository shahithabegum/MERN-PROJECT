import './todolist.css';
import React from 'react'
import CheckIcon from '@material-ui/icons/Check'
import EditIcon from '@material-ui/icons/Edit'
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';
const TodoList = (props) => {
 
    const todolist= props.listitem.map((task,index)=>{
        const taskcomplete = task=>{
            axios.put(`http://localhost:2000/update/${task._id}`,{
                _id:task._id,
                taskname:task.taskname,
                taskstatus:!task.taskstatus
            }).then(res=>{
                props.taskComplete(res.data)
            }).catch(err=>console.log(err))
        }

        const removeTask = id => {
            axios.delete(`http://localhost:2000/${id}`).then(res => props.removeTask(res.data)).catch(err => console.log(err))
        } 
        
        return <li key={index}>
            <div style = {{display : 'flex'}}>
                <CheckIcon className={task.taskstatus ? 'isComplete': 'checkIcon'}/>
                <p className={ task.taskstatus ? 'taskcomplete': ''} onClick={()=>{
                    taskcomplete(task)
                }}> {task.taskname}</p>
            </div>
            <div>
                <EditIcon className='edit' onClick = {() => {
                    props.tasktoUpdate(task)
                    props.showPopup() }} />
        
                <CloseIcon className='close'onClick = {() => {
                    removeTask(task._id)
                }}/>
            </div>
        </li>
    })
 

  return (
    <div className='tasklist'>
        <h1>todolist</h1>
          <ul>
            {todolist}
          </ul>
    </div>
  )
}

export default TodoList