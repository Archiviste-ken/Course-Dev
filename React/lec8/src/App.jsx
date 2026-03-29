import React, {useState} from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  
  const [allUsers, setAllUsers] = useState(['harsh'])


  const submitHandler = (e) => {
    e.preventDefault()
   
    const newAllUsers =  [...allUsers]
    newAllUsers.push(title)
    console.log(newAllUsers)

    setAllUsers(newAllUsers)
    
    setTitle('')
    
  }
  return (
    <div className = 'bg-black h-screen '>

      <form className = 'flex gap-4 p-20' onSubmit = {submitHandler}>

        <input className ='bg-gray-500 text-white gap-5 ' type="text" placeholder="Enter text here"
        value = {title}
        required
        onChange={(e) =>{setTitle(e.target.value)}}
        />

        <button className = 'bg-gray-500 text-white rounded-xs'>Submit</button>
        
      </form>
      

      {allUsers.map(function(elem){
        return <h4 className='text-white'>{elem}</h4>
      })}
    
    </div>
  )
}

export default App

   