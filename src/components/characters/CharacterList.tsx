import {useContext } from "react";
import CharacterItem from "./CharacterItem";
import { CharacterContext } from "../../contexts/CharacterContext";
//import ElectricGamesService from "../../services/ElectricGamesService";
import ICharacterContext from "../../interfaces/ICharacterContext";
import PlusIcon from "../icons/Plus";

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
            <div className="d-flex justify-content-center"><button className="btn btn-outline-success"><PlusIcon/></button></div>
            {getCharacterItem()}
        </section>
    )
}

export default CharacterList