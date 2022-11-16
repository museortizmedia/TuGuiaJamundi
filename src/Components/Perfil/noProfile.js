import React from "react";
import { Navigate } from "react-router-dom";

export const NoProfile = () => {
    return (
        <>
        <Navigate to="/" replace={true}/>
        </>
    )
}
export default NoProfile;