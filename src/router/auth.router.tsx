import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterScreen from "../screens/auth/Register.screen";
import { AuthRouteNames } from "./route-names";
import LoginScreen from "../screens/auth/Login.screen";

const AuthStack = createNativeStackNavigator();

const authRoutes = (
  <AuthStack.Navigator initialRouteName={AuthRouteNames.LOGIN}>
    <AuthStack.Screen name={AuthRouteNames.LOGIN} component={LoginScreen} />
    <AuthStack.Screen
      name={AuthRouteNames.REGISTER}
      component={RegisterScreen}
    />
  </AuthStack.Navigator>
);

export default authRoutes;
