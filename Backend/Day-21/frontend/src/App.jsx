import React from 'react'
import { RouterProvider } from "react-router";
import { router } from "./app.routes";
import "features/shared/global.css"


const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
   

