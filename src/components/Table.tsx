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

const Button1 = styled.TouchableOpacity`
    background-color: #93328E;
    padding: 10px;
    align-items: center;
`

export interface ITable {
    goToDetails: () => void;
}

const Table: React.FC<ITable> = ({goToDetails}) => {

    const handleSubmit = () => goToDetails()

    return (
        <Container>
            <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 20 }}>
                Start a new game!
            </Text>
            <Button1 onPress={handleSubmit} style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 14, color: '#FFFFFF' }}>Account details</Text>
            </Button1>
        </Container>
    );
}

export default Table;