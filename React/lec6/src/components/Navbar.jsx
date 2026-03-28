import { Link } from 'lucide-react';
import React from 'react'

const Navbar = (props) => {

console.log(props.links);


  return (
    <div style = {{ backgroundColor: props.color }} className="mb-1 flex items-center justify-between text-white p-4">
        <h2 className = 'text-2xl font-bold'>{props.title}</h2>
     <div className = 'flex gap-10'>
        
        {props.links.map(function(elem, idx){
            return <h4 key = {idx} >  {elem} </h4>
        })}
     </div>

    
    
    
    </div>
  )
}

export default Navbar