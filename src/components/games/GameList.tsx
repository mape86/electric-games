import { useContext } from "react";
import GameItem from "./GameItem";
import IGame from "../../interfaces/IGame";
import {GameContext} from "../../contexts/GameContext";
import IGameContext from "../../interfaces/IGameContext";

const GameList = () =>{
    const {games} = useContext(GameContext) as IGameContext

    const getGameItems = () => {
        return games.map((game, i) => (
            <GameItem
            key={`game-${i}`}
            id={game.id}
            title={game.title}
            description={game.description}
            platform={game.platform}
            releaseYear={game.releaseYear}
            publisher={game.publisher}
            genre={game.genre}
            price={game.price}
            heroImage={game.heroImage}
            />
        ))
    }

    return(
        <section className="row">
            {getGameItems()}
        </section>
    )

}
export default GameList; 