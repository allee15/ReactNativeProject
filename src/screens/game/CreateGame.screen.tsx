import { FlatList, StyleSheet, Text, View } from "react-native";
import { SmallCard } from "../../components/SmallCard";
import { useRef, useState } from "react";
import { useGame } from "../../hooks/gameContext";
import { useAuth } from "../../hooks/authContext";
import { Button1 } from "../../components/Table";

const data = [
  {
    id: "1",
    title: "Single Player",
    description: "You will be playing against a bot",
  },
  {
    id: "2",
    title: "Multi Player",
    description: "You will be playing against another player",
  },
];

export const CreateGameScreen = () => {
  const gameContext = useGame();
  const authContext = useAuth();

  const [gameType, setGameType] = useState<string | undefined>();

  const flatListRef = useRef(null);

  const selectedGameDescription = data.find(
    (g) => g.id === gameType
  )?.description;

  const handleCreateGame = async () => {
    await gameContext.createGame(authContext.token);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select type of game</Text>

      <FlatList
        style={styles.listContainer}
        data={data}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        ref={flatListRef}
        renderItem={({ item }) => (
          <View>
            <SmallCard
              item={item}
              selected={item.id === gameType}
              setGameType={setGameType}
            />
          </View>
        )}
      />
      {selectedGameDescription && (
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          {selectedGameDescription}
        </Text>
      )}

      <Text
        style={{
          marginTop: "100%",
          marginBottom: 15,
          display: "flex",
          textAlign: "center",
        }}
      >
        Once you've created a game and selected multi-player, it will be
        inserted in a waiting queue list for an oponent
      </Text>
      <Button1 onPress={handleCreateGame}>
        <Text>Create game</Text>
      </Button1>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
    height: "100%",
  },
  header: {
    fontSize: 24,
    width: "100%",
    marginBottom: 20,
  },
  listContainer: {
    marginTop: 10,
  },
});
