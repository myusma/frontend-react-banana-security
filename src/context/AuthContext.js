import React, {createContext, useState} from 'react';
import {useNavigate} from "react-router-dom";


export const AuthContext = createContext({});


function AuthContextProvider({children}) {

    const [auth, setAuth] = useState({
        isAuth: false,
        user: ''
    });

    const navigate = useNavigate()


    function login(email) {
        setAuth({isAuth: true, user: email});
        console.log('Gebruiker is ingelogd met het emailadress:' , email);
        navigate('/profile');
    }


    function logout() {
        setAuth({isAuth: false, user: ''});
        console.log('Gebruiker is uitgelogd!');
        navigate('/');
    }


    const data = {

        login: login,
        logout: logout,
        isAuth: auth.isAuth,
        user: auth.user

    };

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;