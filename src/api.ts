const baseUrl = "https://malamute-enabled-yak.ngrok-free.app";

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

  console.log(data);

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

  console.log(data);

  return data.accessToken;
};

export const userDetails = async (token: string): Promise<string> => {
  const result = await fetch(`${baseUrl}/user/details/me`, {
    method: "GET",
    headers: {
      ...baseHeaders,
      Authorization: "Bearer " + token,
    },
  });

  const data = await result.json();

  console.log(data);

  return data;
};

export const createGame = async (token: string): Promise<any> => {
  const result = await fetch(`${baseUrl}/game`, {
    method: "POST",
    headers: {
      ...baseHeaders,
      Authorization: "Bearer " + token,
    },
  });

  const data = await result.json();

  return data;
};

export const joinGame = async (userId: string): Promise<any> => {
  const result = await fetch(`${baseUrl}/game/join/${userId}`, {
    //TODO: game id, nu user id
    method: "POST",
    headers: {
      ...baseHeaders,
    },
  });
  const data = await result.json();
  return data;
};

export const fetchGames = async (token: string): Promise<any> => {
  const result = await fetch(`${baseUrl}/game`, {
    method: "GET",
    headers: {
      ...baseHeaders,
      Authorization: "Bearer " + token,
    },
  });
  const data = await result.json();
  return data;
};
