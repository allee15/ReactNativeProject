import React, { useState } from "react";
import styled from "styled-components/native";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthRouteNames, GameRouteNames } from "../router/route-names";

const Container = styled.View`
  flex: 1;
  justify-content: leading;
  padding-bottom: 50px;
  padding-top: 32px;
  padding-left: 32px;
  padding-right: 32px;
  background-color: white;
`;

const Input = styled.TextInput`
  width: 100%;
  padding: 16px;
  border: 1px solid #93328e;
  margin-bottom: 10px;
  padding: 8px;
`;

const Button1 = styled.TouchableOpacity`
  background-color: #93328e;
  padding: 10px;
  align-items: center;
`;

const Button2 = styled.TouchableOpacity`
  background-color: #ffffff;
  border: 1px solid #93328e;
  padding: 10px;
  align-items: center;
`;

export interface ILogin {
  onSubmit: (email: string, password: string) => void;
  goToRegister: () => void;
}

const Login: React.FC<ILogin> = ({ onSubmit, goToRegister }) => {
  const navigation = useNavigation<any>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    onSubmit(email, password);
    navigation.navigate("Games", GameRouteNames.TABLE);
  };

  return (
    <Container>
      <Text style={{ fontSize: 28, fontWeight: "bold", marginBottom: 20 }}>
        Access your BattleShips account
      </Text>
      <Text style={{ fontSize: 14, marginBottom: 24 }}>
        Glad to see you! 👋 Enter your details below and access your account.
      </Text>
      <Input
        keyboardType="email-address"
        onChangeText={setEmail}
        placeholder="Email address"
      />
      <Input
        secureTextEntry
        onChangeText={setPassword}
        placeholder="Password"
      />
      <Button1 onPress={handleSubmit} style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 14, color: "#FFFFFF" }}>
          Access your account
        </Text>
      </Button1>
      <Button2 onPress={goToRegister} style={{ marginTop: 16 }}>
        <Text style={{ fontSize: 14 }}>Create account</Text>
      </Button2>
    </Container>
  );
};

export default Login;
