import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";

import SignUp from "../Pages/SignUp/SignUp";
import Checkout from "../Pages/checkout/Checkout";
import Booking from "../Pages/Booking/Booking";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        {
          path:'/checkout/:id',
          element:<PrivateRoute><Checkout></Checkout></PrivateRoute>,
          loader:({params})=>fetch(`https://car-doctor-for-server.vercel.app/services/${params.id}`)
        }, 
        {
          path:'/booking',
          element:<PrivateRoute><Booking></Booking></PrivateRoute>
        }
      ]
    },
  ]);

export default router