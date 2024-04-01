import { NavigationProp, useNavigation } from "@react-navigation/native";
import Login from "../../components/Login";
import { AuthRouteNames, GameRouteNames } from "../../router/route-names";
import { useAuth } from "../../hooks/authContext";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = () => {
  const navigation = useNavigation<any>();
  const auth = useAuth();

  useEffect(() => {
    const redirectToHomeIfLogged = async () => {
      const isLoggedAlready = !!(
        (await AsyncStorage.getItem("token")) || auth.token
      );

      if (isLoggedAlready) {
        navigation.navigate("Games", { screen: GameRouteNames.TABLE });
      }
    };

    redirectToHomeIfLogged();
  }, []);

  const handleGoToRegister = () => {
    navigation.navigate("Games", { screen: AuthRouteNames.REGISTER });
  };

  return <Login onSubmit={auth.login} goToRegister={handleGoToRegister} />;
};

export default LoginScreen;
