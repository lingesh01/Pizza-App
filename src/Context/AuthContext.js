import { useContext, createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, } from "firebase/auth";
import { auth } from "../Firebase/Firebase";


const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [orderNumbers, setOrderNumbers] = useState(0);

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);

    }

    const logout = () => {
        signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            setUser(currentuser);
        })

        return (() => {
            unsubscribe();
        });

    }, [])

    return (
        <AuthContext.Provider value={{ googleSignIn, logout, user, orderNumbers, setOrderNumbers }} >
            {children}
        </AuthContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(AuthContext);
}


