import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import { GameRouteNames } from "../router/route-names";
import { Box, HStack, Pressable } from "native-base";
import { useAuth } from "../hooks/authContext";
import { useGame } from "../hooks/gameContext";

export const GameCard = ({ item }: any) => {
  const navigation = useNavigation<any>();
  const { user } = useAuth();
  const { handleJoinGame } = useGame();

  return (
    <Box
      style={{
        flex: 1,
        height: "auto",
        minHeight: 100,
        borderWidth: 2,
        borderColor: item.isActive ? "green.600" : "black",
        marginBottom: 10,
        paddingLeft: 5,
        paddingRight: 5,
      }}
    >
      <Pressable
        onPress={() =>
          item.player1.email === user.user.email
            ? navigation.navigate(GameRouteNames.WAITINGQUEUE, {
                id: item.id,
              })
            : handleJoinGame(item.id)
        }
      >
        <Text style={{ marginBottom: 4 }}>Status: {item.status}</Text>
        <HStack alignItems="center" style={{ columnGap: 10 }} width="100%">
          <Box
            style={{
              flex: 1,
              display: "flex",
              height: "100%",
              borderRadius: 10,
              backgroundColor: "#f160607d",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>{item?.player1?.email || "No oponent yet"}</Text>
          </Box>
          <Text>VS</Text>
          <Box
            style={{
              flex: 1,
              display: "flex",
              height: "100%",
              borderRadius: 10,
              backgroundColor: "#6082f17c",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>{item?.player2?.email || "No oponent yet"}</Text>
          </Box>
        </HStack>
      </Pressable>
    </Box>
  );
};
