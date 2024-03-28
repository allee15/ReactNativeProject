import { Dimensions, StyleSheet, View } from "react-native";
import { BlockCard } from "./BlockCard";
import styled from "styled-components/native";

const { width } = Dimensions.get("window");

const StyledBlockCard = styled(BlockCard)`
  width: ${width / 2}px;
  margin-right: "20px";
  height: "250px";
`;

export const SmallCard = ({ item, selected, setGameType }: any) => {
  return (
    <StyledBlockCard
      item={item}
      selected={selected}
      setGameType={setGameType}
    />
  );
};
