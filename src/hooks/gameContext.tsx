import { PropsWithChildren, createContext, useContext, useState } from "react";
import { createGame, fetchGames, joinGame } from "../api";

interface IGameContext {
  gamesList: any[];
  selectedGame: object | undefined;
  fetchGames: (token: string) => Promise<void>;
  createGame: (token: string) => Promise<void>;
  handleSelectGame: (id: string | undefined) => void;
  handleJoinGame: (id: string) => Promise<void>;
}

const GameContext = createContext<IGameContext>({
  gamesList: [],
  selectedGame: {},
  fetchGames: async () => {},
  createGame: async (token: string) => {},
  handleSelectGame: () => {},
  handleJoinGame: async (id: string) => {},
});

export const GameContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [gamesList, setGames] = useState<any[]>([]);
  const [selectedGame, setSelectedGame] = useState<object | undefined>(
    undefined
  );

  const handleFetchGames = async (token: string) => {
    try {
      const result = await fetchGames(token);
      setGames([...result.games]);
    } catch (error) {
      console.log("Error fetching games:", error);
    }
  };

  const handleCreateGame = async (token: string) => {
    try {
      const result = await createGame(token);
      console.log("create game", result);
    } catch (error) {
      console.log("Error creating games: ", error);
    }
  };

  const handleSelectGame = (id: string | undefined) => {
    const gameToUpdateIndex = gamesList.findIndex((g) => g.id === id);
    if (gameToUpdateIndex >= 0) {
      setGames([
        ...gamesList.slice(0, gameToUpdateIndex),
        { ...gamesList[gameToUpdateIndex], isActive: true },
        ...gamesList.slice(gameToUpdateIndex + 1, gamesList.length),
      ]);
    } else {
      setGames([...gamesList.map((g) => ({ ...g, isActive: false }))]);
    }
    setSelectedGame(gamesList.find((g) => g.id === id));
  };

  const handleJoinGame = async (gameId: string) => {
    try {
      const response = await joinGame(gameId);
    } catch (err) {
      console.log("Erorr joining game: ", err);
    }
  };

  return (
    <GameContext.Provider
      value={{
        gamesList: gamesList,
        selectedGame: selectedGame,
        fetchGames: handleFetchGames,
        createGame: handleCreateGame,
        handleSelectGame: handleSelectGame,
        handleJoinGame: handleJoinGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
