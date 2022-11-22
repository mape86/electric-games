import { useContext, useState } from "react";
import GameItem from "./GameItem";
import {GameContext} from "../../contexts/GameContext";
import IGameContext from "../../interfaces/IGameContext";
import Select from "../shared/Select";

const GameList = () =>{
    const {games} = useContext(GameContext) as IGameContext
    const [genreFilter, setGenreFilter] = useState("");
    const [platformFilter, setPlatformFilter] = useState("");


    const getGameItems = () => {
        return games.filter((game) => game.platform.includes(platformFilter) && game.genre.includes(genreFilter)).map((game, i) => (
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
        <>
        <section className="row">
        <div className="d-flex align-items-center flex-column">
            <div className="d-flex w-100 align-items-center justify-content-center">
                    <Select
                    isFilter
                    name='Filter by genre:'
                    options={["Action", "Adventure", "RPG"]}
                    currentValue={genreFilter}
                    onChange={(value: string) => setGenreFilter (value)}
                    />
                    <Select
                    isFilter
                    name='Filter by platform:'
                    options={["Playstation 4/5", "Playstation 5", "Xbox Series X", "Nintendo Switch"]}
                    currentValue={platformFilter}
                    onChange={(value: string) => setPlatformFilter (value)}
                    />
                </div>
            </div>
        </section>
        <section className="row pb-4">
        {getGameItems().length > 0 ? getGameItems() : <h2 className="text-white p-5 text-center">No matching games found</h2>}
        </section>
        </>
    )

}
export default GameList; 