import { X } from 'lucide-react';
import { useState } from 'react';
import './App.css'

function App() {

  const submitfun =(e) =>{
    e.preventDefault(); 
    setTitle('')
    setDetail('')
    const tasks=[...task];
    tasks.push({title,detail})
    setTask(tasks)
    console.log(tasks)

  }
  const deleteText=(idx)=>{
    const copyTask=[...task];
    copyTask.splice(idx,1)

    setTask(copyTask)
    console.log(idx)


  }
  const [title,setTitle]=useState("")
  const [detail,setDetail]=useState("")
  const [task,setTask]=useState([])
 

  return (
    <>
     <div className='h-screen lg:flex  bg-black text-amber-50'>
      <form onSubmit={(e)=>{
        submitfun(e)
      }} 
      className='flex   p-10 lg:w-1/2 gap-5 flex-col items start  '>
        <h1 className='text-4xl font-bold'>Add Notes</h1>
      
        <input 
        type="text" 
        placeholder='Enter Tasks' 
        className='px-5 w-full  py-2 border-2 rounded outline-none '
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
        />

        <textarea 
        type='text'
        className='border-2 w-full px-5 py-2 h-30 rounded outline-none'
        placeholder='Enter the details'
        value={detail}
        onChange={(e)=>{
            setDetail(e.target.value)
        }}
        
        />

        <button className='bg-white px-5 py-3 w-full cursor-pointer text-black rounded-xl outline-none active:bg-gray-300'>Add Note</button>
      
      

      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10'>
       <h1 className='text-4xl font-bold'>Recent Notes</h1>
       <div className='flex flex-wrap gap-5 h-full mt-5 overflow-auto'>
        {task.map(function(elem,idx){
           return <div key={idx}className='relative h-60 w-50 bg-cover bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRduwsV2Nk7KvJSgVsjgov_zTsg65Xcbpitkg&s")] rounded-2xl text-black  p-5 bg-emerald-200'>
            <button
              onClick={() => deleteText(idx)}
               className='absolute top-13 right-1 p-1 rounded-full 
              cursor-pointer active:scale-95 z-10 hover:bg-gray-200'>
              <X size={20}/></button>
            
            
            <h3 className='leading-tight text-xl font-bold ml-6 mt-8'>{elem.title}</h3>
            
            <p className='mt-3 leading-tight font-medium ml-6 text-gray-800'>{elem.detail}</p>
           </div>
           
        })}
        
       
       </div>

      </div>
     </div>
    </>
  )
}

export default App
