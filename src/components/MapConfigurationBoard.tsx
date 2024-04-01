import { Box, Column, Row, View, Text, Heading } from "native-base";

export const MapConfigurationBoard = () => {
  return (
    <View>
      <Heading textAlign="center">You have joined a game</Heading>
      <Text marginBottom={4} textAlign="center">
        Before starting the game, you have to configure your map
      </Text>

      {Array.from({ length: 11 })
        .map((_, index) => index + 1)
        .map((item, rowIndex) => (
          <Row>
            {Array.from({ length: 11 })
              .map((_, index) => index + 1)
              .map((item, colIndex) => (
                <Column
                  height={9}
                  width={9}
                  {...(rowIndex > 0 &&
                    colIndex > 0 && {
                      borderWidth: 1,
                      borderColor: "black",
                    })}
                >
                  <Text textAlign="center">
                    {rowIndex === 0 && colIndex > 0
                      ? String.fromCharCode("A".charCodeAt(0) - 1 + colIndex)
                      : colIndex === 0 && rowIndex > 0 && rowIndex}
                  </Text>
                </Column>
              ))}
          </Row>
        ))}
    </View>
  );
};
