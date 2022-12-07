
import './App.css';
import React ,{useState,useEffect} from 'react'
import axios from 'axios';
import Add from './component/Add';
import TodoList from './component/TodoList';
import Updatetask from './component/Updatetask';


const App = () => {
 const [Todo, setTodolist] = useState([])
 const [tasktoUpdate , setTasktoUpdate] = useState({})
 const [showPopup, setShowPopup] = useState(false)
 useEffect(() => {
    axios.get('http://localhost:2000').then(res=>{
     
      setTodolist(res.data)
    }).catch(err=> console.log(err))
 }, [])
  const addtask = newTask =>{
    setTodolist([...Todo,newTask])
  }
  const taskComplete = task => {
    const newList = [...Todo]
    newList.forEach(item => {
      if(item._id === task._id){
        item.taskstatus = task.isComplete
      }
    })
    setTodolist(newList)
  }
 const removeTask = task => {
  const newList = Todo.filter(item => !(item._id === task._id))
  setTodolist(newList)
}
const updatetask = task => {
  const newList = [...Todo]
  newList.forEach(item => {
    if(item._id === task._id){
      item.taskname = task.taskname
    }
  })
  setTodolist(newList)
}
  return (
    <div>
      <Add addtask={addtask} />
      <TodoList listitem={Todo} taskcomplete={taskComplete} removetask={removeTask} tasktoUpdate = {task => setTasktoUpdate(task)} showPopup = {() => setShowPopup(!showPopup)}/>
      {showPopup && <Updatetask task = {tasktoUpdate} updatetask = {updatetask} removePopup = {() => setShowPopup(!showPopup)}/>}
    </div>
  )
}

export default App