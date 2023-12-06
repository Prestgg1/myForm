import { useState } from "react";
import { TaskCreate } from "./TaskCreate";

function TaskShow({task,sil,onUpdate}) {
    function onDelete(){
        sil(task.id)
    };
    const [bool, setBool] = useState(false);
    function handlesubmit(id,updatedtitle,updatedesc){
        setBool(!bool);
        onUpdate(id,updatedtitle,updatedesc);
    };
    function handleclick(){
        setBool(!bool);
    };
{if(bool){
return( <TaskCreate task={task} bool={true} onUpdate={handlesubmit}/> )
}
else{
return (
    <div className="border-2 rounded-md flex items-center justify-center flex-col p-10 w-1/4 border-green-800">
<h1 className="text-xl md:text-2xl font-bold">Göreviniz</h1>
<h6>{task.taskName}</h6>
<h1 className="font-bold text-xl">Yapılacaklar</h1>
<h6>{task.taskDesc}</h6>
<div className="w-full items-center justify-center mt-2 flex gap-1 buttons">
    <button className="  text-white rounded-md bg-red-700 p-2" onClick={onDelete}>Sil</button>
    <button className=" p-5 rounded-md text-white  bg-blue-700" onClick={handleclick}>Güncelle</button>
</div>
</div>
) 
}}

}

export default TaskShow;



{/* */}