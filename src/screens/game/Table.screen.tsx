import { useNavigation } from "@react-navigation/native"
import { GameRouteNames } from "../../router/route-names"
import Table from "../../components/Table"
import { useAuth } from "../../hooks/authContext"

const TableScreen = () => {
    const navigation = useNavigation<any>()
    const handleGoToDetails = () => {
        navigation.navigate(GameRouteNames.DETAILS)
    }
    const handleCreateGame = () => {
        navigation.navigate(GameRouteNames.NEWGAME)
    }
    const handleJoinGame = () => {
        navigation.navigate(GameRouteNames.JOINGAME)
    }
    const auth = useAuth();

    return <Table gamesList={auth.fetchGamesList} createGame={handleCreateGame} joinGame={handleJoinGame} goToDetails={handleGoToDetails}/> 
}

export default TableScreen