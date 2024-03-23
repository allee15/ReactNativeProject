import React from "react";
import styled from "styled-components/native";
import { Text, FlatList} from "react-native";

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
const Button2 = styled.TouchableOpacity`
    background-color: #FFFFFF;
    border: 1px solid #93328E;
    padding: 10px;
    align-items: center;
`

export interface ITable {
    goToDetails: () => void;
    createGame: () => void;
    joinGame: () => void;
    gamesList: [string];
}

const Table: React.FC<ITable> = ({goToDetails, createGame, joinGame, gamesList}) => {

    const handleSubmit = () => goToDetails()
    const handleCreateGame = () => createGame()
    const handleJoinGame = () => joinGame()

    return (
        <Container>
            <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 20 }}>
                Hello, adventurer!
            </Text>

            <FlatList
                data={gamesList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <Text>{item}</Text>}
            />

            <Button1 onPress={handleCreateGame} style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 14, color: '#FFFFFF' }}>Create a game</Text>
            </Button1>
            
            <Button1 onPress={handleJoinGame} style={{ marginTop: 12 }}>
                <Text style={{ fontSize: 14, color: '#FFFFFF' }}>Join a game</Text>
            </Button1>

            <Button2 onPress={handleSubmit} style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 14 }}>Account details</Text>
            </Button2>
        </Container>
    );
}

export default Table;