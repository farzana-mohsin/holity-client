import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import NeedVolunteers from "../Pages/NeedVolunteers/NeedVolunteers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/posts?limit=6`),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/need-volunteers",
        element: <NeedVolunteers></NeedVolunteers>,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/posts`),
      },
    ],
  },
]);

export default router;
