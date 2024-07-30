import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";

const router =createBrowserRouter([
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/signup',
        element:<Signup/>,
    },
    {
        path:'/home',
        element:<Home/>,
    },
    {
        path:'/contactus',
        element:<ContactUs/>,
    }
])
export default router;