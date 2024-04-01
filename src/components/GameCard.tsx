import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import { GameRouteNames } from "../router/route-names";
import { Box, HStack, Pressable } from "native-base";
import { useAuth } from "../hooks/authContext";

export const GameCard = ({ item }: any) => {
  const navigation = useNavigation<any>();
  const { user } = useAuth();
  const { joinGame } = useAuth();

  const handleStartGame = () => {
    navigation.navigate(GameRouteNames.GAME, {
      id: item.id,
    });
  };

  const handleJoinOponentGame = async (id: string) => {
    const res = await joinGame(id);
    console.log("res", res);
    if (res.code < 300) {
      navigation.navigate(GameRouteNames.GAME, {
        id: item.id,
      });
    }
  };

  return (
    <Box
      style={{
        flex: 1,
        height: "auto",
        minHeight: 120,
        borderWidth: 1,
        borderColor: item.isActive ? "green.400" : "gray.200",
        marginBottom: 10,
        paddingLeft: 5,
        paddingRight: 5,
      }}
      {...(item?.player1?.email &&
        item?.player1?.email !== user.user.email &&
        item?.player2?.email &&
        item?.player2?.email !== user.user.email && {
          backgroundColor: "gray.200",
        })}
    >
      <Pressable
        onPress={() => {
          item?.player1?.email === user.user.email ||
          item?.player2?.email === user.user.email
            ? handleStartGame()
            : handleJoinOponentGame(item.id);
        }}
        disabled={
          item?.player1?.email !== user.user.email &&
          item?.player2?.email !== user.user.email
        }
      >
        <Text
          style={{
            marginBottom: 8,
            marginTop: 8,
            fontSize: 12,
            fontWeight: "normal",
          }}
        >
          Status: {item.status}
        </Text>
        <HStack
          alignItems="center"
          padding={2}
          style={{ columnGap: 10 }}
          width="100%"
        >
          <Box
            style={{
              flex: 1,
              display: "flex",
              height: 100,
              borderRadius: 10,
              backgroundColor: "#d18cce",
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
              height: 100,
              borderRadius: 10,
              backgroundColor: "#6082f17c",
              alignItems: "center",
              justifyContent: "center",
              padding: 8,
            }}
          >
            <Text>{item?.player2?.email || "No oponent yet"}</Text>
          </Box>
        </HStack>
      </Pressable>
    </Box>
  );
};
