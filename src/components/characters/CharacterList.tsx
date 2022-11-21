import {useContext, useState } from "react";
import CharacterItem from "./CharacterItem";
import { CharacterContext } from "../../contexts/CharacterContext";
import ICharacterContext from "../../interfaces/ICharacterContext";
import PlusIcon from "../icons/Plus";
import ICharacter from "../../interfaces/ICharacter";
import Select from "../shared/Select";
import GameList from "../games/GameList";
import AddCharacterModal from "./AddCharacterModal";
 
 
// game: ICharacter, gender: ICharacter

const CharacterList = () => {
 
    const {characters} = useContext(CharacterContext) as ICharacterContext
    
        const [shouldFilter, setShouldFilter] = useState(false)
        const [gameFilter, setGameFilter] = useState("All");
        const [genderFilter, setGenderFilter] = useState("All");
        const {filterCharacter} = useContext(CharacterContext) as ICharacterContext

    const filterCharacters = () => {
        <>
        <div>
            <label>Game:</label>
            <input className="form-control bg-dark text-white" type="text" value={gameFilter} onChange={(e) => setGameFilter(e.target.value)}/>
        </div>
        <div>
            <Select
                name='game:'
                options={characters.map((character) => character.game)}
                currentValue={gameFilter}
                onChange={(value: string) => setGameFilter (value)}
            />
            <Select
                name='gender:'
                options={characters.map((character) => character.gender)}
                currentValue={genderFilter}
                onChange={(value: string) => setGenderFilter (value)}
            />
        </div>
        </>

    }

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
            <div className="d-flex justify-content-center">
                <button className="btn btn-outline-success" onClick={AddCharacterModal}>{AddCharacterModal()}<PlusIcon/></button>
            </div>
            {getCharacterItem()}
        </section>
    )
}

export default CharacterList