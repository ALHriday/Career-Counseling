/* eslint-disable react-refresh/only-export-components */
import PropTypes from "prop-types";
import { createContext, useEffect } from "react";

import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase/firebase.init";
import { useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [passwordVerification, setPasswordVerification] = useState(null);
    const [emailVerification, setEmailVerification] = useState(null);
    const [cardItems, setCardItems] = useState([]);
    const [cardItemDetails, setCardItemDetails] = useState([]);

    const [homeCard, setHomeCard] = useState([]);


    useEffect(() => {
        const cards = [...cardItems];
        const card = cards.slice(0, 6)
        setHomeCard(card);
    }, [cardItems])

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

    const notify = (message) => toast(message);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                setCardItems(data)
            }
        ).catch(error => error)
    }, [])
    
    const handleDetails = (cardItem) => {      
        setCardItemDetails(cardItem);
    }

    const values = {
        handleRegister,
        user,
        LogOutUser,
        setUser,
        createUser,
        logInUser,
        notify,
        emailVerification,
        setEmailVerification,
        passwordVerification,
        setPasswordVerification,
        cardItems,
        handleDetails,
        cardItemDetails,
        homeCard
    }


    return (
        <AuthContext.Provider value={values}>
            {children}
            <ToastContainer></ToastContainer>
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children : PropTypes.object
}

export default AuthProvider;