import { createContext, ReactNode, useEffect, useState } from "react";
import IGameConsole from "../interfaces/IGameConsole";
import IGameConsoleContext from "../interfaces/IGameConsoleContex";
import ElectricGamesService from "../services/ElectricGamesService";

export const GameConsoleContext = createContext<IGameConsoleContext | null>(null);

type Props = {
    children: ReactNode; 
}

const GameConsoleProvider = ({children} : Props) => {
    const [consoles, setConsoles] = useState<IGameConsole[]>([]); 

    useEffect(()=>{
        getGameConsoles();
    }, [])

    const getGameConsoles = async () =>{
        const consolesFromDb = await ElectricGamesService.getAllConsoles();
        setConsoles(consolesFromDb);
    }


    return(
        <GameConsoleContext.Provider value={{consoles}}>
            {children}
        </GameConsoleContext.Provider>
    )
}

export default GameConsoleProvider; 