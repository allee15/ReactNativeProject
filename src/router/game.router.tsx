import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GameRouteNames } from "./route-names";
import TableScreen from "../screens/game/Table.screen";
import DetailsScreen from "../screens/user/Details.screen";
import { JoinGameScreen } from "../screens/game/JoinGame.screen";
import { CreateGameScreen } from "../screens/game/CreateGame.screen";
import { WaitingForOponentScreen } from "../screens/game/WaitingForOponentScreen";

const GameStack = createNativeStackNavigator();

const gameRoutes = (
  <GameStack.Navigator>
    <GameStack.Screen name={GameRouteNames.TABLE} component={TableScreen} />
    <GameStack.Screen name={GameRouteNames.DETAILS} component={DetailsScreen} />
    <GameStack.Screen
      name={GameRouteNames.JOINGAME}
      component={JoinGameScreen}
    />
    <GameStack.Screen
      name={GameRouteNames.NEWGAME}
      component={CreateGameScreen}
      options={{
        headerTitle: "Create a new game",
      }}
    />
    <GameStack.Screen
      name={GameRouteNames.WAITINGQUEUE}
      component={WaitingForOponentScreen}
    />
  </GameStack.Navigator>
);

export default gameRoutes;
