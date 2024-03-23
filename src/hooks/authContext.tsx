import React, { createContext, useContext, useState } from "react";
import { createGame, joinGame, login, register, userDetails, fetchGames } from "../api";

interface IAuthContext {
    token: string;
    userEmail: string,
    createNewGame: string,
    joinNewGame: string,
    fetchGamesList: [string],
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string) => Promise<void>;
    userDetails: () => Promise<void>;
    createGame: (userId: string) => Promise<void>;
    joinGame: (userId: string) => Promise<void>;
    fetchGames: () => Promise<void>;
}

const AuthContext = createContext<IAuthContext>({
    token: '',
    userEmail: '',
    createNewGame: '',
    joinNewGame: '',
    fetchGamesList: [''],
    login: async () => {},
    register: async () => {},
    userDetails: async () => {},
    createGame: async () => {},
    joinGame: async () => {},
    fetchGames: async () => {}
})

export const AuthContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {

    const [token, setToken] = useState<string>('');
    const [userEmail, setUserEmail] = useState<string>('');
    const [createNewGame, setCreateGame] = useState<string>('');
    const [joinNewGame, setJoinGame] = useState<string>('');
    const [fetchGamesList, setFetchGames] = useState<[string]>(['']);

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

    const handleCreateGame = async (userId: string) => {
        try {
            const result = await createGame(userId);
            console.log('createGame: ', result);
            setCreateGame(result);
        } catch (error) {
            console.log('Error creating game:', error);
        }
    };

    const handleJoinGame = async (userId: string) => {
        try {
            const result = await joinGame(userId);
            console.log('joinGame: ', result);
            setJoinGame(result);
        } catch (error) {
            console.log('Error joining game:', error);
        }
    };

    const handleFetchGames = async () => {
        try {
            const result = await fetchGames();
            console.log('fetch games: ', result);
            setFetchGames(result);
        } catch (error) {
            console.log('Error fetching games:', error);
        }
    };

    return (
        <AuthContext.Provider value={{
            token,
            userEmail,
            createNewGame,
            joinNewGame,
            fetchGamesList,
            login: handleLogin,
            register: handleRegister,
            userDetails: fetchUserDetails,
            createGame: handleCreateGame,
            joinGame: handleJoinGame,
            fetchGames: handleFetchGames
        }}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => useContext(AuthContext);
