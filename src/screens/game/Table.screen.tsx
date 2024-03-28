import { useNavigation } from "@react-navigation/native";
import { GameRouteNames } from "../../router/route-names";
import Table from "../../components/Table";
import { useGame } from "../../hooks/gameContext";

const TableScreen = () => {
  const navigation = useNavigation<any>();
  const handleGoToDetails = () => {
    navigation.navigate(GameRouteNames.DETAILS);
  };
  const handleCreateGame = () => {
    navigation.navigate(GameRouteNames.NEWGAME);
  };
  const handleJoinGame = () => {
    navigation.navigate(GameRouteNames.JOINGAME);
  };
  const game = useGame();

  return (
    <Table
      gamesList={game.gamesList}
      createGame={handleCreateGame}
      joinGame={handleJoinGame}
      goToDetails={handleGoToDetails}
      fetchGames={game.fetchGames}
    />
  );
};

export default TableScreen;
