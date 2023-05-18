import { createBrowserRouter } from "react-router-dom";
import Main from "../Main";
import AddToys from "../pages/AddToys/AddToys";
import Banner from "../pages/Banner/Banner";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/LOgin";
import Register from "../pages/Register/Register";

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
          path:'addtoy',
          element:<AddToys></AddToys>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        }
      ]
    },
  ]);

  export default router;