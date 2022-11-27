import GameList from "../../components/games/GameList"
import "../shared/Pages.css"
import "./AllGames.css"


const AllGames = () => {

    return(
        <>
        <section className="page-header game-header-img"></section>
        
        <section className="container grid-container">
            <GameList/>
        </section>
        </>
    )
}

export default AllGames