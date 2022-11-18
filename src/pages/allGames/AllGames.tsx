import GameList from "../../components/games/GameList"
import "../shared/Pages.css"

const AllGames = () => {

    return(
        <>
        <section className="page-header game-header-img"></section>
        <section className="container"></section>
            <GameList/>
        </>
    )
}

export default AllGames