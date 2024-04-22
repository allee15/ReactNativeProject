import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const baseUrl = "http://163.172.177.98:8081/docs";

const baseHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const login = async (
  email: string,
  password: string
): Promise<string> => {
  const result = await fetch(`${baseUrl}/auth/login`, {
    method: "POST",
    headers: {
      ...baseHeaders,
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const data = await result.json();

  return data.accessToken;
};

export const register = async (email: string, password: string) => {
  const result = await fetch(`${baseUrl}/auth/register`, {
    method: "POST",
    headers: {
      ...baseHeaders,
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const data = await result.json();

  return data.accessToken;
};

export const userDetails = async (token: string): Promise<string> => {
  const tokenToSend = token || (await AsyncStorage.getItem("token"));
  const { data } = await axios.get(`${baseUrl}/user/details/me`, {
    headers: {
      ...baseHeaders,
      Authorization: "Bearer " + tokenToSend,
    },
  });

  console.log(data);

  return data;
};

export const createGame = async (token: string): Promise<any> => {
  const tokenToSend = token || (await AsyncStorage.getItem("token"));
  const result = await fetch(`${baseUrl}/game`, {
    method: "POST",
    headers: {
      ...baseHeaders,
      Authorization: "Bearer " + tokenToSend,
    },
  });

  const data = await result.json();

  return data;
};

export const joinGame = async (token: string, userId: string): Promise<any> => {
  const tokenToSend = token || (await AsyncStorage.getItem("token"));
  const result = await fetch(`${baseUrl}/game/join/${userId}`, {
    //TODO: game id, nu user id
    method: "POST",
    headers: {
      ...baseHeaders,
      Authorization: "Bearer " + tokenToSend,
    },
  });
  const data = await result.json();
  return data;
};

export const fetchGames = async (token: string): Promise<any> => {
  const tokenToSend = token || (await AsyncStorage.getItem("token"));
  const result = await fetch(`${baseUrl}/game`, {
    method: "GET",
    headers: {
      ...baseHeaders,
      Authorization: "Bearer " + tokenToSend,
    },
  });
  const data = await result.json();
  return data;
};
