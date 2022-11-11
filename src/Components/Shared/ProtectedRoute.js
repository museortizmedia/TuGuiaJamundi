import { useContextFire } from "../../context/fireContext";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({children}) =>{
const {user, loading} = useContextFire();
if(loading) return <h1>Loading...</h1>
if(!user) return <Navigate to="/login"/>
return <>{children}</>
}