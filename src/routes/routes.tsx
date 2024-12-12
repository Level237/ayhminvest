import { PrivateRoute } from "@/pages/Auth/PrivateRoute";
import LoginPage from "@/pages/LoginPage";
import PricingPage from "@/pages/PricingPage";
import { createBrowserRouter } from "react-router-dom";






export const routes=createBrowserRouter([
{
    path:'/login',
    element:<LoginPage/>
},{
    path:"/",
    element:<PrivateRoute/>,
    children:[
        {
            path:"/pricing",
            element:<PricingPage/>
        }
    ]
}
])