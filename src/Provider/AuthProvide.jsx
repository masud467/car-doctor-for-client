import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext()
    const auth = getAuth(app)

const AuthProvide = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    

    const createUser =(email,password) =>{
        setLoading(true)
      return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    

    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth,currentUser=>{
             setUser(currentUser)
             setLoading(false)
         })
         return ()=>{
             return unSubscribe()
         }
     },[])
    const authInfo = {
    createUser,
    user,
    loading,signIn
    }
    
    return (
      
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        
    );
};

export default AuthProvide;