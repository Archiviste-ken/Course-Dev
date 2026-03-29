import React,{useState} from 'react'

const App = () => {

  const [username, setUserName] = useState("")// 2 way binding
  const [userRole, setUserRole] = useState('')
  const [image, setimage] = useState('')
  const [description, setDescription] = useState('')


  const submitHandler = (e) => {
    e.preventDefault()
    console.log(username);

  }
  
  return (
    <div className=' h-screen bg-black text-white '>

      <form className = 'p-2 flex flex-wrap justify-center ' onSubmit={submitHandler}>

        <input onChange = {(e) =>{
          setUserName(e.target.value)
        }} value={username} className =" border-2 px-5 py-2 rounded m-2 w-[45%]"type= "text" placeholder='Enter your name'/>

        <input className =" border-2 px-5 py-2 rounded m-2 w-[45%]"type= "text" placeholder='Profile URI'/>

        <input className =" border-2 px-5 py-2 rounded m-2 w-[45%]"type= "text" placeholder='Enter Description'/>

        <input className =" border-2 px-5 py-2 rounded m-2 w-[45%]"type= "text" placeholder='Enter your role'/>

        <button className= 'border-2 px-5 py-2 active:scale-95 cursor-pointer rounded m-2 w-[90%] bg-emerald-700'>Submit</button>

      </form>
      
    </div>
  )
}

export default App