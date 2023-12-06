import TaskShow from "./TaskShow";
function TaskList({tasks,id,onUpdate}) {
function silinen(term){
id(term)
}
    return ( <div className="flex-wrap w-3/5 items-center justify-center flex gap-4">
        {tasks.map((task,index)=>{
            return <TaskShow 
            onUpdate={onUpdate} 
            sil={silinen} 
            key={index} 
            task={task} />;
        })}
    </div>);
}

export { TaskList };