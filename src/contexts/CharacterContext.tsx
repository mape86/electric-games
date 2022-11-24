import { useEffect, useState, createContext, ReactNode } from 'react';
import ICharacterContext from '../interfaces/ICharacterContext';
import ICharacter from '../interfaces/ICharacter';
import ElectricGamesService from '../services/ElectricGamesService';
import axios from 'axios';
import CharacterItem from '../components/characters/CharacterItem';

export const CharacterContext = createContext<ICharacterContext | null>(null);

type Props = {
    children: ReactNode
} 

const CharacterProvider = ({children} : Props) => {

    const [characters, setCharacters] = useState<ICharacter[]>([]);
    const [singleCharacter, setSingleCharacter] = useState<ICharacter[]>([])

    useEffect (() =>{
        getCharacters()
    }, [])

    const getCharacters = async () => {
        const charactersFromDb = await ElectricGamesService.getAllCharacters()
        setCharacters(charactersFromDb)
    }

    const updateCharacter = async (character: ICharacter) => {
        await ElectricGamesService.putCharacter(character)
        
        await getCharacters()

    }

    const addCharacter = async (character: ICharacter) => {
        await ElectricGamesService.postCharacter(character)

        await getCharacters()
    }

    const deleteCharacter = async (id: number) => {
        await ElectricGamesService.deleteCharacter(id)
        const newCharacterList = characters.filter((character) => character.id != id)
        setCharacters(newCharacterList)

        await getCharacters()
    }

    const getCharacterById = async (id: number) => {
        const result = await ElectricGamesService.getCharacterById(id)
        setSingleCharacter(result)
    }

    return (
        <CharacterContext.Provider value={{characters, updateCharacter, addCharacter, deleteCharacter}}>
            {children}
        </CharacterContext.Provider>
    )

}

export default CharacterProvider