import { useSelector } from 'react-redux'
import {  Navigate, Outlet, useLocation} from 'react-router-dom'

export  const  PrivateRoute=()=> {
    
    const token=useSelector((state:any)=>state.auth.token)
    const location=useLocation()


    return (
        token ? <Outlet/> : <Navigate to="/login" state={{ from:location }} replace/>
    )
}