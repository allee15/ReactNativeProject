import React from "react";
import styled from "styled-components/native";
import { Text, View } from "react-native";
import { BarChart, Grid, YAxis } from "react-native-svg-charts";
import { IUser } from "../hooks/authContext";
import * as scale from "d3-scale";

const Container = styled.View`
  flex: 1;
  justify-content: leading;
  padding-bottom: 50px;
  padding-top: 32px;
  padding-left: 32px;
  padding-right: 32px;
  background-color: white;
`;

const Button1 = styled.TouchableOpacity`
  background-color: #93328e;
  padding: 10px;
  align-items: center;
`;

export interface IUserDetails {
  logout: () => void;
  userDetails: IUser;
}

const CUT_OFF = 50;

const Details: React.FC<IUserDetails> = ({ logout, userDetails }) => {
  const handleSubmit = () => logout();

  const data = [
    {
      value: userDetails?.currentlyGamesPlaying || 5,
      label: "Currently games playing",
    },
    { value: userDetails?.gamesLost || 0, label: "Games Lost" },
    { value: userDetails?.gamesPlayed || 0, label: "Games played" },
    { value: userDetails?.gamesWon || 0, label: "Games won" },
  ];

  return (
    <Container>
      <Text style={{ fontSize: 24, fontWeight: "300" }}>
        Nice to see you again,
      </Text>
      <Text style={{ fontSize: 16, marginTop: 12, fontWeight: "600" }}>
        {userDetails?.user?.email}!
      </Text>
      <View style={{ flexDirection: "row", height: 200, paddingVertical: 16 }}>
        <YAxis
          data={data}
          yAccessor={({ index }) => index}
          scale={scale.scaleBand}
          contentInset={{ top: 10, bottom: 10 }}
          formatLabel={(_, index) => data[index].label}
          style={{
            display: "flex",
            marginRight: 10,
          }}
        />
        <BarChart
          style={{ flex: 1, marginLeft: -10 }}
          data={data}
          horizontal={true}
          yAccessor={({ item }) => item.value}
          svg={{ fill: "#d18cce" }}
          contentInset={{ top: 10, bottom: 10 }}
          gridMin={0}
        >
          <Grid direction={Grid.Direction.VERTICAL} />
        </BarChart>
        <YAxis
          data={data}
          yAccessor={({ index }) => index}
          scale={scale.scaleBand}
          contentInset={{ top: 10, bottom: 10 }}
          style={{
            marginLeft: 3,
          }}
          formatLabel={(_, index) => data[index].value}
        />
      </View>

      <Button1 onPress={handleSubmit} style={{ marginTop: "115%" }}>
        <Text style={{ fontSize: 14, color: "#FFFFFF" }}>
          Logout from my account
        </Text>
      </Button1>
    </Container>
  );
};

export default Details;
