
import { useState } from 'react';
import '../style.css';

function TaskCreate({veriler,bool,task,onUpdate}) {
    function handleclick(e){
        e.preventDefault();
        if(bool){
            onUpdate(task.id,basliq,desc);
        }
        else{
            veriler(basliq,desc);
        }
        setbasliq('');
        setDesc('');
    };
    const [basliq, setbasliq] = useState(task ? task.taskName:'');
    const basliqfunc = (e)=>{
        setbasliq(e.target.value);
    };
    const [desc, setDesc] = useState(task ? task.taskDesc:'');
    const taskfunc = (e)=>{
        setDesc(e.target.value);
    };
if(bool){
return (
    <>
                
    <form className='pt-12 w-2/5 flex justify-start items-stretch flex-col gap-2' onSubmit={handleclick}>
    <h3 className='text-xl font-bold'>Lütfen Taskınızı Düzenleyin!</h3>
        <label htmlFor="basliq" className=''>Başlığı Düzenleyiniz</label>
        <input value={basliq} onChange={basliqfunc} className="w-full rounded-md p-2 outline-none border-2 border-gray-950" type="text" id="basliq"/>
        <label htmlFor="taskenter">Task Düzenleyiniz</label>
        <textarea value={desc} onChange={taskfunc} id="taskenter" cols="20" rows="5" className='w-full rounded-md p-2 outline-none border-2 border-gray-500'></textarea>
        <input type="submit" value="Düzenle" className='w-full bg-purple-950 rounded-md p-4 text-white font-bold'/>
    </form>
</>
)}
else{
   return (
    <>
    <form className='pt-12 w-2/5 flex justify-start items-stretch flex-col gap-2' onSubmit={handleclick}>
    <h3 className='text-xl font-bold'>Lütfen Task Ekleyiniz!</h3>
        <label htmlFor="basliq" className=''>Başlıq</label>
        <input value={basliq} onChange={basliqfunc} className="w-full rounded-md p-2 outline-none border-2 border-gray-950" type="text" id="basliq"/>
        <label htmlFor="taskenter">Task Giriniz</label>
        <textarea value={desc} onChange={taskfunc} id="taskenter" cols="20" rows="5" className='w-full rounded-md p-2 outline-none border-2 border-gray-500'></textarea>
        <input type="submit" value="Oluştur" className='w-full bg-green-800 rounded-md p-4 text-white font-bold'/>
    </form>
</>
   ) 
}
}


export { TaskCreate };