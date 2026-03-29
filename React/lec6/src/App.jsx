// import React from 'react'
// // import Navbar from './components/Navbar'
// import Men from './components/Men'

// const App = () => {
//   const age = 12


//   return (
//     <div>
//       {/* <Navbar title = 'Shreyesh' color = 'red'links ={[ 'Home', 'About', 'Contact' ]} />
//       <Men />
//       <Navbar title = 'Ken' color = 'blue' links ={[ 'Home', 'About', 'Contact' ]} />
//       <Navbar title = 'kaneki' color = 'green' links ={[ 'Home', 'About', 'Contact' ]} />
//       <Navbar title = 'Apple' color ='black' links ={['IPhone', 'Mac', 'Ipad', 'Watch']} /> */}
//   {age >= 10? <Men /> : <Women />}

//     </div>
//   )
// } 
// export default App




import React from 'react'

const App = () => {

  const btnClicked = () => {
    console.log("button is clicked!!!");
    
  }
  return (
    <div>
      <button onClick={ btnClicked} className =  'active:scale-95 bg-emerald-600 text-white px-6 py-4 rounded font-bold m-2'> Click me to download</button>
    </div>
  )
}

export default App



