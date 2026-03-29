import React, {useState} from 'react'

const App = () => {
  const [name, setName] = useState('')
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name);
    
  }
  return (
    <div className = 'bg-black h-screen '>

      <form className = 'flex gap-4 p-20' onSubmit = {submitHandler}>

        <input className ='bg-gray-500 text-white gap-5 ' type="text" placeholder="Enter text here"
        value = {name}
        onChange={(e) =>{setName(e.target.value)}}
        />

        <button className = 'bg-gray-500 text-white rounded-xs'>Submit</button>
        
      </form>
      
    </div>
  )
}

export default App

   