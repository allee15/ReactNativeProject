import React, {useState} from "react";
import styled from "styled-components/native";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

const Container = styled.View`
    flex: 1;
    justify-content: leading;
    padding-bottom: 50px;
    padding-top: 32px;
    padding-left: 32px;
    padding-right: 32px;
    background-color: white;    
`

const Input = styled.TextInput`
    width: 100%;
    padding: 16px;
    border: 1px solid #93328E;
    margin-bottom: 10px;
    padding: 8px;
`

const Button1 = styled.TouchableOpacity`
    background-color: #93328E;
    padding: 10px;
    align-items: center;
`

export interface IUserDetails {
    logout: () => void;
    email: string;
}

const Details: React.FC<IUserDetails> = ({logout, email}) => {

    const handleSubmit = () => logout()

    return (
        <Container>
            <Text style={{ fontSize: 24, marginTop: 20 }}>Nice to see you again!</Text>
            <Text style={{ fontSize: 16, marginTop: 16 }}>Here is your account email: {email}</Text>
            <Button1 onPress={handleSubmit} style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 14, color: '#FFFFFF' }}>Logout from my account</Text>
            </Button1>
        </Container>
    );
}

export default Details;