import React from 'react'

const App = () => {
  return (
    <div className=' h-screen bg-black text-white '>

      <form className = 'p-2 flex flex-wrap justify-center '>
        <input className =" border-2 px-5 py-2 rounded m-2 w-[45%]"type= "text" placeholder='Enter your name'/>
        <input className =" border-2 px-5 py-2 rounded m-2 w-[45%]"type= "text" placeholder='Profile URI'/>
        <input className =" border-2 px-5 py-2 rounded m-2 w-[45%]"type= "text" placeholder='Enter Description'/>
        <input className =" border-2 px-5 py-2 rounded m-2 w-[45%]"type= "text" placeholder='Enter your role'/>
        <button className= 'border-2 px-5 py-2 active:scale-95 cursor-pointer rounded m-2 w-[90%] bg-emerald-700'>Submit</button>
      </form>
      
    </div>
  )
}

export default App