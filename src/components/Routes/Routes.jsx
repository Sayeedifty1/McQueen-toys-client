import { createBrowserRouter } from "react-router-dom";
import Main from "../Main";
import Banner from "../pages/Banner/Banner";
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
        }
      ]
    },
  ]);

  export default router;