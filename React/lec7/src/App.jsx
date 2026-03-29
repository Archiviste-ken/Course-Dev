// import React, { useState } from "react";

// const App = () => {
//   const [num, setNum] = useState(10);

 

  
//   return (
//     <div>
//       <h1 className="bg-gray-300 w-10 mx-auto text-center m-1 font-bold rounded border-2 border-white">
//         {num}
//       </h1>
//       <div className="flex justify-center">
//         <button
//           className=" bg-gray-400 w-fit m-1 font-bold px-2 py-2 rounded border-2 border-white"
//           onClick= {() => {
//     console.log("btn clicked");
//     setNum(num + 1);
//   }}
//         >
//           Increement
//         </button>
//         <button
//           className="bg-gray-400  m-1 font-bold px-2 py-2 rounded border-2 border-white"
//           onClick = {() => {
//     console.log("btn again clicked");
//     setNum(num - 1);
//   }}    
//         >
//           {" "}
//           Decreement
//         </button>
//       </div>
//     </div>
//   );
// };

// export default App;



import React, { useState } from 'react'



const App = () => {

  const [num, setNum] = useState(0)

  return (
    <div>
      <div className="bg-gray-300 w-10 mx-auto text-center m-1 font-bold rounded border-2 border-white">
        {num}
      </div>

      <div className="flex justify-center"> <button className="bg-gray-400 w-fit m-1 font-bold px-2 py-2 rounded border-2 border-white" onClick ={() => {
        const rdm = Math.floor (Math.random()*100)
        setNum(rdm)

        }}>ClickMe </button>
      </div>
    </div>
  )
}

export default App
