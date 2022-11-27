import {useContext, useState } from "react";
import CharacterItem from "./CharacterItem";
import { CharacterContext } from "../../contexts/CharacterContext";
import ICharacterContext from "../../interfaces/ICharacterContext";
import PlusIcon from "../icons/Plus";
import ICharacter from "../../interfaces/ICharacter";
import Select from "../shared/Select";
import AddCharacterModal from "./AddCharacterModal";
import { GameContext } from "../../contexts/GameContext";
import IGameContext from "../../interfaces/IGameContext";
import SingleCharacterModal from "./SingleCharacterModal";
 
 
const CharacterList = () => {
 
    const {characters, addCharacter} = useContext(CharacterContext) as ICharacterContext
    const {games} = useContext(GameContext) as IGameContext

    const [gameFilter, setGameFilter] = useState("");
    const [genderFilter, setGenderFilter] = useState("");
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [characterModalIsOpen, setCharacterModalIsOpen] = useState(false)
    
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
    //Using modal for both adding and retrieving character by id
    return(
        <>
        <section className="row pb-5">
            <>
            <div className="d-flex align-items-center flex-column">
                <button className="btn btn-outline-warning m-4" onClick={() => setModalIsOpen(true)}><PlusIcon/></button>
                <button className="btn btn-warning mt-2" onClick={() => setCharacterModalIsOpen(true)}>Character by ID</button>
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
                
            {getCharacterItem().length > 0 ? getCharacterItem() : <h2 className="text-white">No matching character found</h2>}
            </>
        </section>
        {modalIsOpen && <AddCharacterModal handleAdd={handleAdd} onClose={() => setModalIsOpen(false)}/>}
        {characterModalIsOpen && <SingleCharacterModal onClose={() => setCharacterModalIsOpen(false)}/>}
        </>
    )
}

export default CharacterList