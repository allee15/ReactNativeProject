import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { Text, View, Switch } from "react-native";
import { useAuth } from "../hooks/authContext";
import { GameCard } from "./GameCard";
import { Box, FlatList } from "native-base";

const Container = styled.View`
  flex: 1;
  justify-content: leading;
  padding-bottom: 50px;
  padding-top: 32px;
  padding-left: 32px;
  padding-right: 32px;
  background-color: white;
`;

export const Button1 = styled.TouchableOpacity`
  background-color: #93328e;
  padding: 10px;
  align-items: center;
`;
export const Button2 = styled.TouchableOpacity`
  background-color: #ffffff;
  border: 1px solid #93328e;
  padding: 10px;
  align-items: center;
`;

export interface ITable {
  goToDetails: () => void;
  createGame: () => void;
  joinGame: () => void;
  fetchGames: (token: string) => Promise<void>;
  gamesList: any[];
}

const Table: React.FC<ITable> = ({
  goToDetails,
  createGame,
  joinGame,
  fetchGames,
  gamesList,
}) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const { token, user, getUserDetails } = useAuth();

  const handleSubmit = () => goToDetails();
  const handleCreateGame = () => createGame();
  const handleJoinGame = () => joinGame();

  useEffect(() => {
    getUserDetails();
    fetchGames(token);
  }, []);

  const filteredGames = gamesList?.filter(
    (g) =>
      g?.player1?.email === user?.user?.email ||
      g?.player2?.email === user?.user?.email
  );

  console.log(filteredGames.length);

  return (
    <Container>
      <Text style={{ fontSize: 28, fontWeight: "bold", marginBottom: 4 }}>
        Hello, adventurer!
      </Text>

      <Text>Here are your current games</Text>
      <Box
        style={{
          flexWrap: "wrap",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text>Show only games I can join</Text>
        <Switch
          collapsable={true}
          trackColor={{ false: "red", true: "green" }}
          thumbColor={isEnabled ? "black" : "white"}
          onValueChange={() => setIsEnabled(!isEnabled)}
          value={isEnabled}
        />
      </Box>

      <FlatList
        style={{ flex: 1 }}
        data={filteredGames}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item }) => <GameCard key={item.id} item={item} />}
      />

      <Button1 onPress={handleCreateGame} style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 14, color: "#FFFFFF" }}>Create a game</Text>
      </Button1>

      <Button1 onPress={handleJoinGame} style={{ marginTop: 12 }}>
        <Text style={{ fontSize: 14, color: "#FFFFFF" }}>Join a game</Text>
      </Button1>

      <Button2 onPress={handleSubmit} style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 14 }}>Account details</Text>
      </Button2>
    </Container>
  );
};

export default Table;
