import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Rooms from "../Pages/Rooms/Rooms";
import MyBookings from "../Pages/MyBookings/MyBookings";
import RoomsDetails from "../Pages/Rooms/RoomsDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Privetroute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/rooms",
        element: (
          <Privetroute>
            <Rooms></Rooms>
          </Privetroute>
        ),
        loader: () => fetch("http://localhost:5000/rooms"),
      },
      {
        path: "/my-bookings",
        element: (
          <Privetroute>
            <MyBookings></MyBookings>
          </Privetroute>
        ),
        loader: () => fetch(`http://localhost:5000/bookings`),
      },
      {
        path: "/rooms/:id",
        element: (
          <Privetroute>
            <RoomsDetails></RoomsDetails>
          </Privetroute>
        ),
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/rooms/${params.id}`);
        },
      },
      {
        path: "/bookings/:id",
        element: (
          <Privetroute>
            <MyBookings></MyBookings>
          </Privetroute>
        ),
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/bookings/${params.id}`);
        },
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default Router;
