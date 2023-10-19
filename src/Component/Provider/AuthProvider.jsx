import { createContext, useEffect, useState } from "react";
import{
    createUserWithEmailAndPassword,getAuth,
    onAuthStateChanged,signInWithEmailAndPassword,
    signOut,GoogleAuthProvider,signInWithPopup
} from "firebase/auth";
import app from "../Firebase/firebase.config";
export const AuthContext = createContext(null);
const auth =getAuth(app)
const googleProvider =new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
     const [user,setUser]=useState();
    const googleSignIn =(value)=>{
        return signInWithPopup(auth,googleProvider);
    };
    const signUp=(email,password,name,photoURL)=>{
        return createUserWithEmailAndPassword(auth,email,password,name,photoURL);
    };
    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            console.log("state change")
            setUser(currentUser)
        })
        return(()=>{
            unsubscribe()
        })
    },[])
    const logout=()=>{
        return signOut(auth);
    }
    const AuthInfo ={
        googleSignIn,signUp,signIn,user,logout,
    }

    return <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
    
};

export default AuthProvider;
