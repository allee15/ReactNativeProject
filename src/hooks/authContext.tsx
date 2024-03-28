import React, { createContext, useContext, useState } from "react";
import {
  createGame,
  joinGame,
  login,
  register,
  userDetails,
  fetchGames,
} from "../api";

export interface IUser {
  currentlyGamesPlaying: number;
  gamesLost: number;
  gamesPlayed: number;
  gamesWon: number;
  user: {
    email: string;
    id: string;
  };
}

interface IAuthContext {
  token: string;
  user: IUser;
  createNewGame: string;
  joinNewGame: string;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  getUserDetails: () => Promise<void>;
  createGame: (userId: string) => Promise<void>;
  joinGame: (userId: string) => Promise<void>;
}

const AuthContext = createContext<IAuthContext>({
  token: "",
  user: {} as IUser,
  createNewGame: "",
  joinNewGame: "",
  login: async () => {},
  register: async () => {},
  getUserDetails: async () => {},
  createGame: async () => {},
  joinGame: async () => {},
});

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState<string>("");
  const [user, setUser] = useState<IUser>({} as IUser);
  const [createNewGame, setCreateGame] = useState<string>("");
  const [joinNewGame, setJoinGame] = useState<string>("");

  const handleLogin = async (email: string, password: string) => {
    try {
      const result = await login(email, password);
      console.log("login: ", result);
      setToken(result);
    } catch (error) {
      console.log(error);
    }
  };
  const handleRegister = async (email: string, password: string) => {
    try {
      const result = await register(email, password);
      console.log("register: ", result);
      setToken(result);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUserDetails = async () => {
    try {
      const result: any = await userDetails(token);
      console.log("userDetails: ", result);
      setUser({ ...result });
    } catch (error) {
      console.log("Error fetching user details:", error);
    }
  };

  const handleCreateGame = async (userId: string) => {
    try {
      const result = await createGame(userId);
      console.log("createGame: ", result);
      setCreateGame(result);
    } catch (error) {
      console.log("Error creating game:", error);
    }
  };

  const handleJoinGame = async (userId: string) => {
    try {
      const result = await joinGame(userId);
      console.log("joinGame: ", result);
      setJoinGame(result);
    } catch (error) {
      console.log("Error joining game:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        createNewGame,
        joinNewGame,
        login: handleLogin,
        register: handleRegister,
        getUserDetails: fetchUserDetails,
        createGame: handleCreateGame,
        joinGame: handleJoinGame,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
