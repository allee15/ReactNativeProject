import { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import styled from "styled-components/native";
import { useGame } from "../../hooks/gameContext";
import { MapConfigurationBoard } from "../../components/MapConfigurationBoard";

const GameContainer = styled.View`
  flex: 1;
  padding-top: 50px;
  padding-left: 10px;
  padding-right: 10px;
  align-items: center;
  justify-content: start;
  background-color: transparent;
  background-color: white;
`;

export const GameScreen = ({ route }: any) => {
  const [timer, setTimer] = useState(0);
  const { id } = route.params;

  const { handleSelectGame, selectedGame } = useGame();

  useEffect(() => {
    if (selectedGame?.status !== "MAP_CONFIG") {
      const intervalId = setInterval(() => {
        setTimer((prevState) => prevState + 1);
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [timer, selectedGame]);

  useEffect(() => {
    if (id) {
      handleSelectGame(id);
    }

    return () => {
      handleSelectGame(undefined);
    };
  }, []);

  console.log(selectedGame?.status);

  return (
    <GameContainer>
      {selectedGame?.status === "MAP_CONFIG" ? (
        <MapConfigurationBoard />
      ) : (
        <>
          <Text
            style={{
              alignSelf: "flex-start",
              fontSize: 16,
              fontWeight: "500",
              color: "#1e38e6",
            }}
          >
            Game id: {id}
          </Text>

          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              marginTop: 200,
            }}
          >
            Waiting for an opponent
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
        </>
      )}
    </GameContainer>
  );
};
