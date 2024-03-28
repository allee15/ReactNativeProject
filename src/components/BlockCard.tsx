import { View, Text, Pressable } from "react-native";

export const BlockCard = ({ item, style, setGameType, selected }: any) => {
  return (
    <View style={style}>
      <Pressable
        onPress={() => setGameType(item.id)}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#c434bc" : "#f9f9f9",
          },
          {
            ...(selected && {
              backgroundColor: "#863181",
              borderWidth: 6,
              borderColor: "#000",
            }),
          },
          {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: 200,
            justifyContent: "center",
            borderRadius: 12,
            marginRight: 4,
          },
        ]}
      >
        <>
          <Text>{`${item.id}P`}</Text>
          <Text>{item.title}</Text>
        </>
      </Pressable>
    </View>
  );
};
