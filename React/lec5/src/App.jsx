import React from 'react'
import Card from './components/Card'


const App = () => {

  const age = 18
  const name = 'Shreyesh'
  const arr = [10,20,30]
  return (
    
    <div>
      <div className = 'text-xl text-red-600'>App</div>
      <h1 className = 'text-indigo-100'>Age : {age}</h1>
      <h1 className = 'text-indigo-100'>Name : {name}</h1>
      <h1 className = 'text-indigo-100'>Array : {arr.filter(function(elem){
          return elem > 15
      }).map(function(elem){  
          return <h1>{elem/2}</h1>
      })}</h1>
      <Card />
    </div>
  )
}

export default App