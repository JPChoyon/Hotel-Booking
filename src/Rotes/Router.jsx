import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Rooms from "../Pages/Rooms/Rooms";
import MyBookings from "../Pages/MyBookings/MyBookings";

import RoomsDetails from "../Pages/Rooms/RoomsDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";



const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/rooms",
        element: <Rooms></Rooms>,
        loader: () => fetch("http://localhost:5000/rooms"),
      },
      {
        path: "/my-bookings",
        element: <MyBookings></MyBookings>,
      },
      {
        path: '/rooms/:id',
        element: <RoomsDetails></RoomsDetails>,
        loader: ({ params }) => {
         return fetch(`http://localhost:5000/rooms/${params.id}`);
        }
      },
      {
        path: '/login',
        element:<Login></Login>
      },
      {
        path: '/register',
        element:<Register></Register>
      }
    ],
  },
]);

export default Router;