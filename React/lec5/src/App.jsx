import React from 'react'
import Card from './components/Card'


const App = () => {

  
  return (
    
    <div className = 'p-3 h-screen bg-black'>
      {Card('sarthak')}
      {Card('harwhal')}
      {Card('sarthak')}
    </div>
  )
}

export default App