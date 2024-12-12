import LoginPage from "@/pages/LoginPage";
import PricingPage from "@/pages/PricingPage";
import { createBrowserRouter } from "react-router-dom";






export const routes=createBrowserRouter([
{
    path:'/login',
    element:<LoginPage/>
},{
    path:"/pricing",
    element:<PricingPage/>
}
])