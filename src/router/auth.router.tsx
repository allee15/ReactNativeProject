import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from '../screens/auth/Register.screen';
import { AuthRouteNames } from './route-names';
import { Text } from 'react-native'
import LoginScreen from '../screens/auth/Login.screen';

const AuthStack = createNativeStackNavigator()

const authRoutes = (
    <AuthStack.Navigator initialRouteName='Login'>
        <AuthStack.Screen name={AuthRouteNames.LOGIN} component={LoginScreen} options={{
        }}/>
        <AuthStack.Screen name={AuthRouteNames.REGISTER} component={RegisterScreen} options={{
        }}/>
    </AuthStack.Navigator>
)

export default authRoutes;