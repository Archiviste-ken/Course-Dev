import { createBrowserRouter } from "react-router"; // react-router is a popular routing library for React applications. It provides a way to handle navigation and rendering of components based on the URL path. The createBrowserRouter function is used to create a router object that can be used with the RouterProvider component to enable routing in the application.

import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";

export const router = createBrowserRouter([  // createBrowserRouter is a function from react-router that creates a router object based on the provided route configuration. It takes an array of route objects as an argument, where each route object defines a path and the corresponding component to render when that path is accessed.
    {
        path: "/login",
        element: <Login />
    },
    {
        path: '/register',
        element:  <Register />
    },
    {
        path: '/',
        element: <h1>Home Page</h1>
    }

]) 
