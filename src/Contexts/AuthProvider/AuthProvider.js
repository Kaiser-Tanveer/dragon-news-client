import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    // User State 
    const [user, setUser] = useState(null);

    // Redirect Login Loader 
    const [loading, setLoading] = useState(true);

    // Google sign in
    const providerLogIn = provider => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    // Side Effect for Auth Change 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log(currentUser);
            if (currentUser === null || currentUser.emailVerified)
                setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, [])


    // Log Out 
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    // Update User profile
    const updateUserProfile = profile => {
        return updateProfile(auth.currentUser, profile);
    }


    // Create User with Email & Pass 
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Verify Email Address 
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }


    // Sign in with Email and Password 
    const emailSignIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const authInfo = {
        user,
        loading,
        setLoading,
        providerLogIn,
        logOut,
        createUser,
        emailSignIn,
        updateUserProfile,
        verifyEmail
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;