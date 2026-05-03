import { createBrowserRouter } from "react-router"; // creates a router config object that tells you app which url shows which component.
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";

export const router = createBrowserRouter([ // router is a variable which stores/holds the routes
  {
    path: "/",
    element: <h1>Home</h1>,
  },

  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
