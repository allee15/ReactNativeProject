import React, { createContext, useContext, useState } from "react";
import { login, register, userDetails } from "../api";

interface IAuthContext {
    token: string;
    userEmail: string,
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string) => Promise<void>;
    userDetails: () => Promise<void>;
}

const AuthContext = createContext<IAuthContext>({
    token: '',
    userEmail: '',
    login: async () => {},
    register: async () => {},
    userDetails: async () => {}
})

export const AuthContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {

    const [token, setToken] = useState<string>('');
    const [userEmail, setUserEmail] = useState<string>('');

    const handleLogin = async (email: string, password: string) => {
        try {
            const result = await login(email, password);
            console.log('login: ', result)
            setToken(result);
        } catch (error) {
            console.log(error)
        }
    };
    const handleRegister = async (email: string, password: string) => {
        try {
            const result = await register(email, password);
            console.log('register: ', result)
            setToken(result);
        } catch (error) {
            console.log(error)
        }
    };

    const fetchUserDetails = async () => {
        try {
            const result = await userDetails();
            console.log('userDetails: ', result) 
            setUserEmail(result);
        } catch (error) {
            console.log('Error fetching user details:', error);
        }
    };

    return (
        <AuthContext.Provider value={{
            token,
            userEmail,
            login: handleLogin,
            register: handleRegister,
            userDetails: fetchUserDetails
        }}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => useContext(AuthContext);
