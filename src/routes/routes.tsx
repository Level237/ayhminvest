import { PrivateRoute } from "@/pages/Auth/PrivateRoute";
import AuthenticatePage from "@/pages/AuthenticatePage";
import DashboardPage from "@/pages/DashboardPage";
import LoginPage from "@/pages/LoginPage";
import PaymentPage from "@/pages/PaymentPage";
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
        },{
            path:"/payment/with/stripe",
            element:<PaymentPage/>
        },{
            path:"/authenticate",
            element:<AuthenticatePage/>
        },{
            path:'/dashboard',
            element:<DashboardPage/>
        }
    ]
}
])