import { createContext, useContext, useEffect, useState } from "react";
//importaciones auth
import { fireauth, firestorage, firedb } from "../firebase/config";
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
import {
    ref,
    uploadBytes,
    getDownloadURL,
    getBytes
} from 'firebase/storage';
import {
    collection,
    addDoc,
    getDoc,
    setDoc,
    deleteDoc,
    doc,
    getDocs,
    query,
    where
  } from 'firebase/firestore';
import { async } from "@firebase/util";


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
    const userExist = async(uid) => {
        const docRef = doc(firedb, "usuarios", uid);
        const res = await getDoc(docRef);
        //console.log(res.exists());
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

    const registrarAuth = (auth) => {
        registrarUser(
            {displayName: auth.displayName, photoURL: auth.photoURL, email: auth.email}
        );
    }

    const registrarUser = async(elauth) => {
        try {
            const collectionRef = doc(firedb, 'usuarios');
            const docRef = doc(collectionRef, elauth.uid)
            setUser(elauth);
            await setDoc(docRef, elauth);
            console.log('usuario registrado')
        } catch (error) { }
    }

    const updateUser = async(user) => {
        try {
            const collectionRef = doc(firedb, 'usuarios');
            const docRef = doc(collectionRef, user.uid)
            await setDoc(docRef, user);
        } catch (error) { }
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(fireauth, async currentUser =>{
            setAuth(currentUser);
            if(currentUser!=null){
                const isRegister = await userExist(currentUser.uid)
                if(!isRegister)
                {
                    setUser(currentUser);
                }
            }
            //console.log(currentUser)
            SetLoading(false);
        })
        return () => unsubscribe();
    },[])

    return <fireContext.Provider value={{
        //auth
        auth, loading, singup, login, loginWithGoogle, loginWithFacebook, logout, recoverPassword,
        //storage
              
        //bd
        userExist,
        registrarAuth,
        updateUser
    }}>{children}</fireContext.Provider>
}