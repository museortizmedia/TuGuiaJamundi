import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/config";
import { Navigate } from "react-router-dom";
import {register} from '../../firebase/AuthSlice'
import { useDispatch, useSelector} from "react-redux";

export const Perfil = () => {

    const dispatch = useDispatch()
    const {userdata} = useSelector(state => state)

    useEffect(() =>{
        onAuthStateChanged(auth, async(user) =>{
            if(!user) return dispatch( logout() );
            dispatch( register({email: user.email}))
        })
    }, [])

    const logout = () => {
        Navigate('/login', {
            replace: true
        })
    }
    return (
        <>
        <h1>{userdata.displayName}</h1>
        </>
    )
    }
    export default Perfil;