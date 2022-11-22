import { useContext } from "react";
import { GameConsoleContext } from "../../contexts/GameConsoleContext";
import IGameConsoleContext from "../../interfaces/IGameConsoleContex";
import GameConsoleItem from "./GameConsoleItem";

const GameConsoleList = () => {
    const {consoles} = useContext(GameConsoleContext) as IGameConsoleContext;


    const getGameConsoleItems = () => {
        return consoles.map(console => (
            <GameConsoleItem
            key={`console-${console.id}`}
            id={console.id}
            brand={console.brand}
            model={console.model}
            description={console.description}
            price={console.price}
            image={console.image}
            />
        ))
    }

    return(
        <section className="row pb-4">
            {getGameConsoleItems()}
        </section>
    )
}

export default GameConsoleList; 