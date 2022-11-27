import { ChangeEvent, useContext, useState } from "react";
import { GameConsoleContext } from "../../contexts/GameConsoleContext";
import IGameConsole from "../../interfaces/IGameConsole";
import IGameConsoleContext from "../../interfaces/IGameConsoleContex";
import ElectricGamesService from "../../services/ElectricGamesService";
import GameConsoleItem from "./GameConsoleItem";

const GameConsoleList = () => {
    const {consoles} = useContext(GameConsoleContext) as IGameConsoleContext;
    const [consoleBrand, setConsoleBrand] = useState<string>("");
    const [consoleList, setConsoleList] = useState<IGameConsole[]>(consoles);


    const getGameConsoleItems = () => {
        return consoleList.map(console => (
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

    const showAllConsoles = () =>{
        setConsoleList(consoles); 
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.currentTarget;
        switch(name){
            case "brand":
            setConsoleBrand(value)
            break; 
        }
       
    }

    const getGameConsoleByBrand = async () => {
        const consolesFromDb = await ElectricGamesService.getConsoleByBrand(consoleBrand);
        setConsoleList(consolesFromDb); 
    }


    return(
        <>
        <section className="d-flex justify-content-center">
            <div className="flex-row">
                <input className="form-control-sm input-field" name="brand" placeholder="Brand (e.g Sony)" type="text" value={consoleBrand} onChange={handleChange} />
                <button className="btn btn-outline-warning m-2" onClick={getGameConsoleByBrand}>Get Consoles by Brand</button>
                <button className="btn btn-outline-light m-2" onClick={showAllConsoles}>Show All Consoles</button>
            </div>
        </section>
        <section className="row pb-4">
            {getGameConsoleItems().length > 0 ? getGameConsoleItems() : <h2 className="text-white p-3">No Matching Brand Found</h2>}
        </section>
        </>
    )
}

export default GameConsoleList; 