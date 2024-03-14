import React, {useState} from "react";
import styled from "styled-components/native";
import { Text } from "react-native";

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

export interface ILogin {
    onSubmit: (email: string, password: string) => void
}

const Register: React.FC<ILogin> = ({onSubmit}) => 
{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => onSubmit(email, password)

    return (
        <Container>
            <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 20 }}>
                Let's create your account
            </Text>
            <Text style={{ fontSize: 14, marginBottom: 24 }}>
                Please enter your details below
            </Text>
            <Input
                keyboardType="email-address"
                onChangeText={setEmail}
                placeholder="Email address"
            />
            <Input
                secureTextEntry
                onChangeText={setPassword}
                placeholder="Password"
            />
            <Button1 onPress={handleSubmit} style={{ marginTop: 16 }}>
                <Text style={{ fontSize: 14, color: '#FFFFFF' }}>Create account</Text>
            </Button1>
        </Container>
    );
}

export default Register;