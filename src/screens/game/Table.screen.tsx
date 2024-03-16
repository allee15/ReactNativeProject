import { useNavigation } from "@react-navigation/native"
import { GameRouteNames } from "../../router/route-names"
import Table from "../../components/Table"

const TableScreen = () => {
    const navigation = useNavigation<any>()
    const handleGoToDetails = () => {
        navigation.navigate(GameRouteNames.DETAILS)
    }

    return <Table goToDetails={handleGoToDetails}/> 
}

export default TableScreen