import {useContext } from "react";
import CharacterItem from "./CharacterItem";
import { CharacterContext } from "../../contexts/CharacterContext";
//import ElectricGamesService from "../../services/ElectricGamesService";
import ICharacterContext from "../../interfaces/ICharacterContext";

const CharacterList = () => {
 
    const {characters} = useContext(CharacterContext) as ICharacterContext

    const getCharacterItem = () => {
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
            {getCharacterItem()}
        </section>
    )
}

export default CharacterList