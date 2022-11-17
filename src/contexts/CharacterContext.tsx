import { useEffect, useState, createContext, ReactNode } from 'react';
import ICharacterContext from '../interfaces/ICharacterContext';
import ICharacter from '../interfaces/ICharacter';
import ElectricGamesService from '../services/ElectricGamesService';
import axios from 'axios';

export const CharacterContext = createContext<ICharacterContext | null>(null);

type Props = {
    children: ReactNode
} 

const CharacterProvider = ({children} : Props) => {

    const [characters, setCharacters] = useState<ICharacter[]>([]);

    useEffect (() =>{
        getCharacters()
    }, [])

    const getCharacters = async () => {
        const charactersFromDb = await ElectricGamesService.getAllCharacters()

        setCharacters(charactersFromDb)
    }

    return (
        <CharacterContext.Provider value={{characters}}>
            {children}
        </CharacterContext.Provider>
    )

}

export default CharacterProvider