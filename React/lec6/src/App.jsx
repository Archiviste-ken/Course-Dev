import React from 'react'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar title = 'Shreyesh' color = 'red'links ={[ 'Home', 'About', 'Contact' ]} />
      <Navbar title = 'Ken' color = 'blue' links ={[ 'Home', 'About', 'Contact' ]} />
      <Navbar title = 'kaneki' color = 'green' links ={[ 'Home', 'About', 'Contact' ]} />
    </div>
  )
}

export default App