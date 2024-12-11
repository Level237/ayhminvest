import LoginPage from "@/pages/LoginPage";
import { createBrowserRouter } from "react-router-dom";






export const routes=createBrowserRouter([
{
    path:'/login',
    element:<LoginPage/>
}
])