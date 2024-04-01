import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import Register from "../../components/Register";
import { useAuth } from "../../hooks/authContext";
import { GameRouteNames } from "../../router/route-names";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
  const auth = useAuth();
  const navigation = useNavigation<any>();

  useEffect(() => {
    const redirectToHomeIfLogged = async () => {
      const isLoggedAlready = !!(
        (await AsyncStorage.getItem("token")) || auth.token
      );

      if (isLoggedAlready) {
        navigation.navigate(GameRouteNames.TABLE);
      }
    };

    redirectToHomeIfLogged();
  }, []);

  return <Register onSubmit={auth.register} />;
};

export default RegisterScreen;
