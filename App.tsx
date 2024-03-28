import "react-native-gesture-handler";
import Router from "./src/router";
import { AuthContextProvider } from "./src/hooks/authContext";
import { GameContextProvider } from "./src/hooks/gameContext";
import { NativeBaseProvider } from "native-base";
import { useEffect } from "react";
import { LogBox } from "react-native";

export default function App() {
  useEffect(() => {
    LogBox.ignoreLogs(["In React 18, SSRProvider"]);
  }, []);
  return (
    <NativeBaseProvider isSSR={false}>
      <AuthContextProvider>
        <GameContextProvider>
          <Router />
        </GameContextProvider>
      </AuthContextProvider>
    </NativeBaseProvider>
  );
}
