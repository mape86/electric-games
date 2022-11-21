import { useContext, useRef, useState } from "react";
import GameItem from "./GameItem";
import IGame from "../../interfaces/IGame";
import {GameContext} from "../../contexts/GameContext";
import IGameContext from "../../interfaces/IGameContext";

const GameList = () =>{
    const {games} = useContext(GameContext) as IGameContext
    const [shouldFilter, setShouldFilter] = useState(false)
    const [filteredGames, setFilteredGames] = useState<IGame[]>(games)
    const selectedGenre = useRef<HTMLSelectElement>(null)


    const getAllGameItems = () => {
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

    const handleFilterByGenreChange = () => {
        const genre = selectedGenre.current?.value; 
        if(genre != "default"){
            setShouldFilter(true)
            const filteredGames = games.filter(game => game.genre == genre)
            setFilteredGames(filteredGames)
        }else {
            setShouldFilter(false)
        }
    }

    const  getFilteredGames = () => {
        return filteredGames.map(game =>(
            <GameItem
            key= {`game-${game.id}`}
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
        <section>
            <label>Filter by Genre</label>
            <select id="genre-select" ref={selectedGenre} onChange={handleFilterByGenreChange}>
                <option value="default" selected>Choose Genre</option>
                <option value="Adventure">Adventure</option>
                <option value="Action">Action</option>
                <option value="RPG">RPG</option>
            </select>
        </section>
        <section className="row">
            {shouldFilter ? getFilteredGames()  : getAllGameItems() }
        </section>
        </>
    )

}
export default GameList; 