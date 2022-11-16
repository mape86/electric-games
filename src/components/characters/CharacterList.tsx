import { useState, useEffect } from "react";
import CharacterItem from "./CharacterItem";
import ElectricGamesService from "../../services/ElectricGamesService";
import ICharacter from "../../interfaces/ICharacter";

const CharacterList = () => {
    const [characters, setCharacters] = useState<ICharacter[]>([]);

    useEffect (() =>{
        getCharacters()
    }, [])

    const getCharacters = async () => {
        const charactersFromDb = await ElectricGamesService.getAllCharacters()

        setCharacters(charactersFromDb)
    }

    const getCharacterList = () => {
        return characters.map((character, i) => (
            <CharacterItem 
                key={`character-${i}`}
                id= {character.id}
                name= {character.name}
                gender= {character.gender}
                game= {character.game}
                description= {character.description}
                image= {character.image}
            />
        ))
    }

    return(
        <section className="row">
            {getCharacterList()}
        </section>
    )
}

export default CharacterList