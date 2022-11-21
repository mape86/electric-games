import { useContext, useRef, useState } from "react";
import GameItem from "./GameItem";
import IGame from "../../interfaces/IGame";
import {GameContext} from "../../contexts/GameContext";
import IGameContext from "../../interfaces/IGameContext";

const GameList = () =>{
    const {games} = useContext(GameContext) as IGameContext
    const [filterByGenre, setFilterByGenre] = useState(false)
    const [filterByPlatform, setFilterByPlatform] = useState(false)
    const [gamesByGenre, setGamesByGenre] = useState<IGame[]>(games)
    const [gamesByPlatform, setGamesByPlatform] = useState<IGame[]>(games)
    const selectedGenre = useRef<HTMLSelectElement>(null)
    const selectedPlatform = useRef<HTMLSelectElement>(null)


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

    const handleFilterByGenre = () => {
        const genre = selectedGenre.current?.value; 
        if(genre != "default"){
            setFilterByGenre(true)
            const gamesByGenre = games.filter(game => game.genre == genre)
            setGamesByGenre(gamesByGenre)
        }else {
            setFilterByGenre(false)
        }
    }

    const handleFilterByPlatform = () => {
        const platform = selectedPlatform.current?.value; 
        if(platform != "default"){
            setFilterByPlatform(true)
            const gamesByPlatform = games.filter(game => game.platform == platform)
            setGamesByPlatform(gamesByPlatform)
        }else {
            setFilterByPlatform(false)
        }
    }

    const  getGamesByGenre = () => {
        return gamesByGenre.map(game =>(
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

    const  getGamesByPlatform = () => {
        return gamesByPlatform.map(game =>(
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
        <section className="row">
            <div className="col-6">
            <select className="form-select bg-dark text-white col-6" ref={selectedGenre} onChange={handleFilterByGenre}>
                <option value="default" selected>Filter by Genre...</option>
                <option value="Adventure">Adventure</option>
                <option value="Action">Action</option>
                <option value="RPG">RPG</option>
            </select>
            </div>
            <div className="col-6">
            <select className="form-select bg-dark text-white col-6" ref={selectedPlatform} onChange={handleFilterByPlatform}>
                <option value="default" selected>Filter by Platform...</option>
                <option value="Playstation 4">Playstation 4</option>
                <option value="Playstation 5">Playstation 5</option>
                <option value="Xbox Series X">Xbox Series X</option>
                <option value="Nintendo Switch">Nintendo Switch</option>
            </select>
            </div>
        </section>
        <section className="row">
            {filterByGenre  ? getGamesByGenre()  : getAllGameItems() }
        </section>
        </>
    )

}
export default GameList; 