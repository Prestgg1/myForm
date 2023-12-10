import { createContext, useState } from 'react';
import axios from 'axios';
const TasksContext = createContext();
function Provider({children}){
    const [tasks, setTasks] = useState([]);
    async function veri(basliq,desc){
     const response =  await axios.post('http://localhost:3000/tasks',{
       basliq,desc
     });
 
     const createdTask = [
       ...tasks,response.data
     ]
     setTasks(createdTask);
   };
   async function fetch(){
     const istek = await axios.get('http://localhost:3000/tasks');
     setTasks(istek.data)
   };
   async function onDelete(id){
    await axios.delete(`http://localhost:3000/tasks/${id}`);
    const silinen = tasks.filter(task => task.id !== id);
    setTasks(silinen)
  }
  async function edittaskbyid(id,guncelbasliq,guncelaciklama){
    await axios.put(`http://localhost:3000/tasks/${id}`,{
      basliq:guncelbasliq,desc:guncelaciklama
    });
    const updatedtask = tasks.map(task =>{
      if(task.id==id){
        task.id=id;
        task.basliq=guncelbasliq;
        task.desc=guncelaciklama;
      }
      else{
        return task;
      }
    })
  };
  const datavalues={
    tasks,veri,fetch,edittaskbyid,onDelete
  };
    return(
        <TasksContext.Provider value={datavalues}>
            {children}
        </TasksContext.Provider>
    )
}
export {Provider}
export default TasksContext;