import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {createContext, useState } from "react";
import auth from "./firebase.config";


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const LoginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const AuthInfo = {
        user,
        createUser,
        LoginUser

    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};


export default AuthProvider;