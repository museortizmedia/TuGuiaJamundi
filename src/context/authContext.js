import { createContext, useContext, useEffect, useState } from "react";
//importaciones auth
import { auth } from "../firebase/config";
import {
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    FacebookAuthProvider,
    signInWithPopup,
    signOut,
    sendPasswordResetEmail
} from 'firebase/auth';


//context contiene los valores del contexto para ser utilizados desde cualquier componente
export const authContext = createContext()

//hook personalizado para simplicar el código de importación del context y useContext en otros componentes
export const useContextAuth = () =>{
    const context = useContext(authContext)
    return context 
}

//AuthProvider nos permitirá acceder a los datos del contexto colocándose como padre de todos los componentes
export const AuthProvider = ({children}) =>{
    //datos del contexto:
    const [user, setUser] = useState(null);
    const [loading, SetLoading] = useState(true)
    
    //funciones de contexto
    const singup = (email, password) =>
        createUserWithEmailAndPassword(auth, email, password)

    const login = (email, password) => 
        signInWithEmailAndPassword(auth, email, password)

    const logout = () => signOut(auth)

    const loginWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return  signInWithPopup(auth, googleProvider);
    }

    const loginWithFacebook = () => {
        const facebookProvider = new FacebookAuthProvider();
        return signInWithPopup(auth, facebookProvider);
    }

    const recoverPassword = (email) =>  sendPasswordResetEmail(auth, email)

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log(currentUser)
            SetLoading(false);
        })
        return () => unsubscribe();
    },[])

    return <authContext.Provider value={{user, loading, singup, login, loginWithGoogle, loginWithFacebook, logout, recoverPassword}}>{children}</authContext.Provider>
}