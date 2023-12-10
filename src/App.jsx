import { useState,useEffect,useContext } from 'react'

import './style.css'
import { TaskCreate } from './components/TaskCreate'
import TasksContext from './context/Tasks'
import { TaskList } from './components/TaskList'



function App() {

  const {fetch} = useContext(TasksContext);
  useEffect(() => {
    fetch();
    ;},[]);

  return (
    <div className='flex items-center justify-center flex-col gap-4'>
      <TaskCreate/>
      <h1>Görevler</h1>
      <TaskList/>
    </div>
  )
}

export default App
