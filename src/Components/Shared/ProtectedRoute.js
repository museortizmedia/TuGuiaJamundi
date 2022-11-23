import React from 'react';
import { useContextFire } from "../../context/fireContext";
import { Navigate } from "react-router-dom";
import LoadingComponent from "./Loading";

export const ProtectedRoute = ({children}) =>{
const {auth, loading} = useContextFire();
if(loading) return <LoadingComponent/>
if(!auth) return <Navigate to="/login"/>
return <>{children}</>
}