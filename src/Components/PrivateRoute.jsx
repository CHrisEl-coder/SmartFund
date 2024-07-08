import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "../Hooks/useAuthStatus";
import Loader from "./loader";


const PrivateRoute = () =>{
    const {loggedIn, checkStatus} = useAuthStatus();

    if (checkStatus) {
        return <Loader />
    }

    return loggedIn ? <Outlet/> : <Navigate to='/sign-up'/>;
}

export default PrivateRoute;