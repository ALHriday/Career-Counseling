/* eslint-disable react-refresh/only-export-components */
import PropTypes from "prop-types";
import { createContext, useEffect } from "react";

import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase/firebase.init";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    // const navigate = useNavigate();

    const provider = new GoogleAuthProvider();
    const handleRegister = () => {
        return signInWithPopup(auth, provider)
    }

    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const LogOutUser = () => {
        return signOut(auth)
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
        return () => unSubscribe();
    }, [])

    const me = 'Hriday'

    const values = {
        me,
        handleRegister,
        user,
        LogOutUser,
        setUser,
        createUser,
        logInUser

    }
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>

    );
};

AuthProvider.propTypes = {
    children : PropTypes.object
}

export default AuthProvider;