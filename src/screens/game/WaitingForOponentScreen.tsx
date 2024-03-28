import { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import styled from "styled-components/native";
import { useGame } from "../../hooks/gameContext";

const WaitingContainer = styled.View`
  flex: 1;
  padding-top: 50px;
  padding-left: 10px;
  padding-right: 10px;
  align-items: center;
  justify-content: start;
  background-color: transparent;
  background-color: white;
`;

export const WaitingForOponentScreen = ({ route }: any) => {
  const [timer, setTimer] = useState(0);
  const { id } = route.params;

  const { handleSelectGame, selectedGame } = useGame();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevState) => prevState + 1);
    }, 1000);

    return () => {
      handleSelectGame(undefined);
      clearInterval(intervalId);
    };
  }, [timer]);

  useEffect(() => {
    if (id) {
      handleSelectGame(id);
    }
  }, []);

  return (
    <WaitingContainer>
      <Text style={{ alignSelf: "flex-start" }}>Game id: {id}</Text>

      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          marginTop: 200,
        }}
      >
        Waiting for an oponent
      </Text>
      <Image
        style={{
          width: 150,
          height: 150,
        }}
        source={require("../../../assets/timer.jpg")}
      />
      <Text>
        {(Math.floor(timer / 60) === 0
          ? "00"
          : Math.floor(timer / 60) < 10
          ? `0${Math.floor(timer / 60)}`
          : `${Math.floor(timer / 60)}`) +
          `:${
            timer % 60 === 0
              ? "00"
              : timer % 60 < 10
              ? `0${timer % 60}`
              : timer % 60
          }`}
      </Text>
    </WaitingContainer>
  );
};
