
import {RouterProvider} from 'react-router-dom'
import AppRoutes from './Approutes'
import './style.scss'
import { AuthProvider } from './features/auth/auth.context.jsx'


const App = () => {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  )
  
}

export default App