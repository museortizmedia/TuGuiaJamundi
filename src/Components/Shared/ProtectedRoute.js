import { useContextAuth } from "../../context/authContext";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({children}) =>{
const {user, loading} = useContextAuth();
if(loading) return <h1>Loading...</h1>
if(!user) return <Navigate to="/login"/>
return <>{children}</>
}