import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import authRoutes from "./auth.router";
import gameRoutes from "./game.router";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthRouteNames } from "./route-names";

const Stack = createNativeStackNavigator();

const Router: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name={"Auth"}
          children={() => authRoutes}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name={"Games"}
          children={() => gameRoutes}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
