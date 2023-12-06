import { useState } from 'react'

import './style.css'
import { TaskCreate } from './components/TaskCreate'
import { TaskList } from './components/TaskList'



function App() {

  const [tasks, setTasks] = useState([]);
  function veri(basliq,desc){
    const createdTask = [
      ...tasks,{
        id: Math.floor(Math.random()*10000),
        taskName: basliq,
        taskDesc:desc,
      }
    ]
    setTasks(createdTask);
  };
function onDelete(id){
  const silinen = tasks.filter(task => task.id !== id);
  setTasks(silinen)
}
function edittaskbyid(id,guncelbasliq,guncelaciklama){
  const updatedtask = tasks.map(task =>{
    if(task.id==id){
      task.id=id;
      task.taskName=guncelbasliq;
      task.taskDesc=guncelaciklama;
    }
    else{
      return task;
    }
  })
}


  return (
    <div className='flex items-center justify-center flex-col gap-4'>
      <TaskCreate veriler={veri}/>
      <h1>Görevler</h1>
      <TaskList id={onDelete} tasks={tasks} onDelete={onDelete} onUpdate={edittaskbyid} />
    </div>
  )
}

export default App
