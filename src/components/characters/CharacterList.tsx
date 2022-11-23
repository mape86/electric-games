import {useContext, useState } from "react";
import CharacterItem from "./CharacterItem";
import { CharacterContext } from "../../contexts/CharacterContext";
import ICharacterContext from "../../interfaces/ICharacterContext";
import PlusIcon from "../icons/Plus";
import ICharacter from "../../interfaces/ICharacter";
import Select from "../shared/Select";
import GameList from "../games/GameList";
import AddCharacterModal from "./AddCharacterModal";
import { GameContext } from "../../contexts/GameContext";
import IGameContext from "../../interfaces/IGameContext";
 
 
// game: ICharacter, gender: ICharacter

const CharacterList = () => {
 
    const {characters, addCharacter} = useContext(CharacterContext) as ICharacterContext
    const {games} = useContext(GameContext) as IGameContext

    const [gameFilter, setGameFilter] = useState("");
    const [genderFilter, setGenderFilter] = useState("");
    const [modalIsOpen, setModalIsOpen] = useState(false)
    
    const getCharacterItem = () => {
        //Mapping all characters and filter them by name and gender if filters are active
        return characters.filter((character) => character.game.includes(gameFilter) && character.gender.includes(genderFilter)).map((character, i) => (
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

    const handleAdd = (character: ICharacter) => {
        addCharacter(character)
        setModalIsOpen(false)
    }

    //Using selects to choose filters, if no character matches filters, a message will be returned
    return(
        <>
        <section className="row pb-5">
            <>
            <div className="d-flex align-items-center flex-column">
                <button className="btn btn-outline-success mb-4" onClick={() => setModalIsOpen(true)}><PlusIcon/></button>
                <div className="d-flex w-100 align-items-center justify-content-center">
                    <Select
                    isFilter
                    name='Filter by game:'
                    options={games.map((game) => game.title)}
                    currentValue={gameFilter}
                    onChange={(value: string) => setGameFilter (value)}
                    />
                    <Select
                    isFilter
                    name='Filter by gender:'
                    options={["Male", "Female"]}
                    currentValue={genderFilter}
                    onChange={(value: string) => setGenderFilter (value)}
                    />
                </div>
            </div>
                
            {getCharacterItem().length > 0 ? getCharacterItem() : <h2>No matching character found</h2>}
            </>
        </section>
        {modalIsOpen && <AddCharacterModal handleAdd={handleAdd} onClose={() => setModalIsOpen(false)}/>}
        </>
    )
}

export default CharacterList