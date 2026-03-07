import { useState,useEffect } from "react"
// import { useState } from 'react'
import axios from "axios"


function App() {
      const [notes,setNotes ] = useState([])
      console.log("hello");
      
    function fetchNotes(){
      
 axios.get('http://localhost:3000/api/notes')
    .then (res=>{
        setNotes(res.data.notes)
        // console.log(res.data);
        
 })
    }

      useEffect(()=>{

        fetchNotes()

      },[])
     
     

  return (
    
   <>

  <form className='note-create-form'>
    <input type="text" placeholder = "Enter title" />
    <input type="text" placeholder = "Enter description" />
    <button>Create note</button>
  </form>

    <div className ="notes">
      {
      notes.map(note=>{
        return <div className="note">
        <h1>{note.title}</h1>
        <p>{note.description}</p>
      </div>
      })
     }
    </div>   
  </>

   
  )
}

export default App
