const baseUrl = 'https://malamute-enabled-yak.ngrok-free.app';

const baseHeaders = {
    "Content-Type": 'application/json',
    "Accept": 'application/json'
}

export const login = async (email: string, password: string): Promise<string> => {
    const result = await fetch(`${baseUrl}/auth/login`, {
        method: 'POST',
        headers: {
            ...baseHeaders
        },
        body: JSON.stringify({
            email, password
        })
    })

    const data = await result.json()

    console.log(data)

    return data.accessToken
};

export const register = async (email: string, password: string) => {
    const result = await fetch(`${baseUrl}/auth/register`, {
        method: 'POST',
        headers: {
            ...baseHeaders
        },
        body: JSON.stringify({
            email, password
        })
    })

    const data = await result.json()

    console.log(data)

    return data.accessToken
};

export const userDetails = async (): Promise<string> => {
    const result = await fetch(`${baseUrl}/user/details/me`, {
        method: 'GET',
        headers: {
            ...baseHeaders
        }
    })

    const data = await result.json()

    console.log(data)

    return data
};

export const getGames = async (): Promise<any> => {
    const result = await fetch(`${baseUrl}/games`, {
        method: 'GET',
        headers: {
            ...baseHeaders
        }
    });

    const data = await result.json();
    return data;
};

export const createGame = async (userId: string): Promise<any> => {
    const result = await fetch(`${baseUrl}/games/create`, {
        method: 'POST',
        headers: {
            ...baseHeaders
        },
        body: JSON.stringify({ userId })
    });

    const data = await result.json();
    return data;
};

export const joinGame = async (userId: string): Promise<any> => {
    const result = await fetch(`${baseUrl}/games/join`, {
        method: 'POST',
        headers: {
            ...baseHeaders
        },
        body: JSON.stringify({ userId })
    });

    const data = await result.json();
    return data;
};

export const fetchGames = async (): Promise<any> => {
    const result = await fetch(`${baseUrl}/games`, {
        method: 'GET',
        headers: {
            ...baseHeaders
        }
    });
    const data = await result.json();
    return data;
};