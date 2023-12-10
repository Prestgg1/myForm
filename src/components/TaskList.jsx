import TaskShow from "./TaskShow";
import TasksContext from "../context/Tasks";
import { useContext } from "react";
function TaskList() {
    const {tasks} = useContext(TasksContext)
    return ( <div className="flex-wrap w-3/5 items-center justify-center flex gap-4">
        {tasks.map((task,index)=>{
            return <TaskShow 
            key={index} 
            task={task} />;
        })}
    </div>);
}

export { TaskList };