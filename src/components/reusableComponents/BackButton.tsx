import React from 'react';
import { Button, Image } from 'swiftui-react-native';
import { useNavigation } from "@react-navigation/native"

const BackButton = () => {
 const navigation = useNavigation();

 const handlePress = () => {
      navigation.goBack();
 };

 return (
    <Button action={handlePress}>
        <Image source={require('./assets/ic_nav_up.png')} style={{ width: 32, height: 32 }}/>
    </Button>
 );
};

export default BackButton;
