import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import NeedVolunteers from "../Pages/NeedVolunteers/NeedVolunteers";
import AddVolunteer from "../Pages/AddVolunteer/AddVolunteer";
import PostDetails from "../Components/PostDetails/PostDetails";
import PrivateRoutes from "./PrivateRoutes";
import BeAVolunteer from "../Pages/BeAVolunteer/BeAVolunteer";
import ManageMyPosts from "../Pages/ManageMyPosts/ManageMyPosts";
import UpdatePost from "../Pages/ManageMyPosts/UpdatePost";

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
      {
        path: "/add-post",
        element: (
          <PrivateRoutes>
            <AddVolunteer></AddVolunteer>
          </PrivateRoutes>
        ),
      },
      {
        path: "/post-details/:id",
        element: (
          <PrivateRoutes>
            <PostDetails></PostDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/post/${params.id}`, {
            credentials: "include",
          }),
      },
      {
        path: "/be-a-volunteer/:id",
        element: (
          <PrivateRoutes>
            <BeAVolunteer></BeAVolunteer>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/post/${params.id}`, {
            credentials: "include",
          }),
      },
      {
        path: "/manage-my-posts",
        element: (
          <PrivateRoutes>
            <ManageMyPosts></ManageMyPosts>
          </PrivateRoutes>
        ),
        loader: () =>
          fetch(`${import.meta.env.VITE_API_URL}/posts`, {
            credentials: "include",
          }),
      },
      {
        path: "/update-post/:id",
        element: (
          <PrivateRoutes>
            <UpdatePost></UpdatePost>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/post/${params.id}`, {
            credentials: "include",
          }),
      },
    ],
  },
]);

export default router;
