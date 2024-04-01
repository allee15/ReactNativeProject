import { View, FlatList } from "native-base";
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
        keyExtractor={(item: any) => item?.id}
        renderItem={({ item }) => <GameCard onClick item={item} />}
      />
    </View>
  );
};
