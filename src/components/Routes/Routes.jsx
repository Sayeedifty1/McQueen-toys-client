import { createBrowserRouter } from "react-router-dom";
import Main from "../Main";
import AddToys from "../pages/AddToys/AddToys";
import AllToys from "../pages/AllToys/AllToys";
import Banner from "../pages/Banner/Banner";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/LOgin";
import MyToys from "../pages/MyToys/MyToys";
import Register from "../pages/Register/Register";
import SingleToy from "../pages/SingleToy/SingleToy";
import UpdateToy from "../pages/UpdateToy/UpdateToy";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element:<Banner></Banner>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/addtoy',
          element:<AddToys></AddToys>
        },
        {
          path:'/alltoys',
          element:<AllToys></AllToys>
        },
        {
          path:'/mytoys',
          element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
          path:'/updatetoy/:id',
          element:<UpdateToy></UpdateToy>,
          loader: ({params}) => fetch(`https://toy-e-commerece-server.vercel.app/alltoys/${params.id}`)
        },
        {
          path:'/singletoy/:id',
          element:<PrivateRoute><SingleToy></SingleToy></PrivateRoute>,
          loader: ({params}) => fetch(`https://toy-e-commerece-server.vercel.app/alltoys/${params.id}`)
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        }
      ]
    },
  ]);

  export default router;