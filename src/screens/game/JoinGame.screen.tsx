import { FlatList, SafeAreaView, View } from "react-native";
import { GameCard } from "../../components/GameCard";
import { useGame } from "../../hooks/gameContext";
import { useAuth } from "../../hooks/authContext";
import { useEffect } from "react";

export const JoinGameScreen = () => {
  const { gamesList } = useGame();
  const { getUserDetails } = useAuth();

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <View style={{ marginHorizontal: 12, marginVertical: 16 }}>
      <FlatList
        data={gamesList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GameCard item={item} />}
      />
    </View>
  );
};
