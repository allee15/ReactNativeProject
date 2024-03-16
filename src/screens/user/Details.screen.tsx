import { NavigationProp, useNavigation } from "@react-navigation/native"
import Details from "../../components/Details"
import { AuthRouteNames } from "../../router/route-names"
import { useAuth } from "../../hooks/authContext"
import React, { useEffect, useState } from "react";

const DetailsScreen = () => {
    const navigation = useNavigation<any>()
    const handleLogOut = () => {
        navigation.navigate(AuthRouteNames.LOGIN)
    }
    const auth = useAuth();
    useEffect(() => {
        auth.userDetails()
        }, [])

    return <Details logout={handleLogOut} email={auth.userEmail} />;
}

export default DetailsScreen