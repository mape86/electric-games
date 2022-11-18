import { createContext, ReactNode, useEffect, useState } from "react";
import IGame from "../interfaces/IGame";
import IGameContext from "../interfaces/IGameContext";
import ElectricGamesService from "../services/ElectricGamesService";

export const GameContext = createContext<IGameContext | null>(null);

type Props = {
    children: ReactNode; 
}

const GameProvider = ({children} : Props) => {
    const [games, setGames] = useState<IGame[]>([]);

    useEffect(()=>{
        getGames();
    }, [])

    const getGames = async () =>{
        const gamesFromDb = await ElectricGamesService.getAllGames();
        setGames(gamesFromDb);
    }

    return(
        <GameContext.Provider value={{games}}>
            {children}
        </GameContext.Provider>
    )
}

export default GameProvider; 