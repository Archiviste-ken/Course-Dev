import React from 'react'
// import Navbar from './components/Navbar'
import Men from './components/Men'

const App = () => {
  const age = 12


  return (
    <div>
      {/* <Navbar title = 'Shreyesh' color = 'red'links ={[ 'Home', 'About', 'Contact' ]} />
      <Men />
      <Navbar title = 'Ken' color = 'blue' links ={[ 'Home', 'About', 'Contact' ]} />
      <Navbar title = 'kaneki' color = 'green' links ={[ 'Home', 'About', 'Contact' ]} />
      <Navbar title = 'Apple' color ='black' links ={['IPhone', 'Mac', 'Ipad', 'Watch']} /> */}
  {age >= 10? <Men /> : <Women />}

    </div>
  )
} 
export default App



