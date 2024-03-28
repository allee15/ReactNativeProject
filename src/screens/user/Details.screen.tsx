import { useNavigation } from "@react-navigation/native";
import Details from "../../components/Details";
import { AuthRouteNames, GameRouteNames } from "../../router/route-names";
import { useAuth } from "../../hooks/authContext";
import React, { useEffect } from "react";

const DetailsScreen = () => {
  const navigation = useNavigation<any>();
  const handleLogOut = () => {
    navigation.navigate("Auth", { screen: AuthRouteNames.LOGIN });
  };
  const auth = useAuth();

  useEffect(() => {
    const getUserDetails = async () => {
      await auth.getUserDetails();
    };
    getUserDetails();
  }, []);

  return <Details logout={handleLogOut} userDetails={auth.user} />;
};

export default DetailsScreen;
