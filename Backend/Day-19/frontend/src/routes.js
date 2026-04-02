import { BrowserRouter } from 'react-router';



export const routes = BrowserRouter([
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <RegistrationForm />
    }
])