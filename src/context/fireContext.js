import React, { createContext, useContext, useEffect, useState } from "react";
//importaciones auth
import { fireauth, /*firestorage,*/ firedb } from "../firebase/config";
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
/*import {
    ref,
    uploadBytes,
    getDownloadURL,
    getBytes
} from 'firebase/storage';*/
import {
    collection,
    /*addDoc,*/
    getDoc,
    setDoc,
    /*deleteDoc,*/
    doc,
    getDocs,
    query,
    where
  } from 'firebase/firestore';


//context contiene los valores del contexto para ser utilizados desde cualquier componente
export const fireContext = createContext()

//hook personalizado para simplicar el código de importación del context y useContext en otros componentes
export const useContextFire = () =>{
    const context = useContext(fireContext)
    return context 
}

//FireProvider nos permitirá acceder a los datos del contexto colocándose como padre de todos los componentes
export const FireProvider = ({children}) =>{
    //datos del contexto:
    const [auth, setAuth] = useState(null);
    const [user, setUser] = useState(null);
    const [loading, SetLoading] = useState(true)
    
    //funciones de contexto
    const singup = (email, password) =>
        createUserWithEmailAndPassword(fireauth, email, password)

    const login = (email, password) => 
        signInWithEmailAndPassword(fireauth, email, password)

    const logout = () => signOut(fireauth)

    const loginWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return  signInWithPopup(fireauth, googleProvider);
    }

    const loginWithFacebook = () => {
        const facebookProvider = new FacebookAuthProvider();
        return signInWithPopup(fireauth, facebookProvider);
    }

    const recoverPassword = (email) =>  sendPasswordResetEmail(fireauth, email)

    /*storage*/

    /*db*/
    const userExist = async(userid) => {
        if(!userid)return false;
        const docRef = doc(firedb, "usuarios", userid);
        const res = await getDoc(docRef);
        return res.exists();
    }

    const existQUERY = async(collec, clave, valor) => {
        const collectionables = []
        const docsRef = collection(firedb, collec);
        const q = query(docsRef, where(clave, "==", valor));
        const querySnap = await getDocs(q);
        querySnap.forEach(doc=>{
            collectionables.push(doc.data());
        });
        return collectionables.length>0? true : null;
    }

    const registrarUser = async(user) => {
        try {
            const newUser = {
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL,
                portada: null,
                bio: null,
                nivel: 0,
            }
            await setDoc(doc(firedb, "usuarios", user.uid), newUser);
            setUser(newUser)
        } catch (error) { console.log('no se puedo registrar el usuario: '+error) }
    }
    const getUserInfo = async(userId) => {
        const docRef = doc(firedb, "usuarios", userId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            //console.log("Document data:", docSnap.data());
            return {...docSnap.data()};
        } else {
            console.log("No such document!");
            return null;
        }
    }
/*
    const updateUser = async(user) => {
        try {
            const collectionRef = doc(firedb, 'usuarios');
            const docRef = doc(collectionRef, user.uid)
            await setDoc(docRef, user);
        } catch (error) { }
    }*/

    //cambio estado del auth
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(fireauth, async currentUser =>{
            setAuth(currentUser);
            if(currentUser) {
                const register = await userExist(currentUser.uid)
                if(register){
                    console.log("usuario autorizado y registrado")
                    //setUser(await getUserInfo(currentUser.uid))
                }
                else
                {
                    console.log("usuario autorizado y no registrado")
                    await registrarUser(currentUser)
                }
            }
            SetLoading(false);
        })
        return () => unsubscribe();
    },[])

    return <fireContext.Provider value={{
        //vars
        auth, loading,
        //auth
        singup, login, loginWithGoogle, loginWithFacebook, logout, recoverPassword,
        //storage
              
        //bd
        userExist,
        getUserInfo
    }}>{children}</fireContext.Provider>
}