import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GameRouteNames } from './route-names';
import TableScreen from '../screens/game/Table.screen';
import DetailsScreen from '../screens/user/Details.screen';

const GameStack = createNativeStackNavigator()

const gameRoutes = (
    <GameStack.Navigator>
        <GameStack.Screen name={GameRouteNames.TABLE} component={TableScreen} options={{
        }}/>
        <GameStack.Screen name={GameRouteNames.DETAILS} component={DetailsScreen} options={{
        }}/>
    </GameStack.Navigator>
)

export default gameRoutes;