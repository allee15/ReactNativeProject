import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native'
import { GameRouteNames } from './route-names';
import TableScreen from '../screens/game/Table.screen';

const GameStack = createNativeStackNavigator()

const gameRoutes = (
    <GameStack.Navigator>
        <GameStack.Screen name={GameRouteNames.TABLE} component={TableScreen} options={{
            headerTitle: (props) => <Text {...props}>Game</Text>
        }}/>
    </GameStack.Navigator>
)

export default gameRoutes;