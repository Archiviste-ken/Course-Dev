import React from 'react'

const Card = (props) => {
  return (
    <div className = 'bg-white border-2 border-red-500 m-10 rounded px-10 py-3 w-fit'>
        <h1 className = 'text-4xl font-semibold '>{props}</h1>
       
        </div>
  )
}

export default Card
