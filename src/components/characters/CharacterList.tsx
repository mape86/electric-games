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
        //Filtering character array to only return characters matching filter coming from State, then map out the list. If no filter is active, the whole list will be returned.
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

    //Using the Select component to set the filter values, and the list of filtered characters will be returned. If original state is used all characters will be returnes, and if no match is found a message will appear, The value "All" set in Select component isFiltered is the default value and will return all characters. 
    return(
        <>
        <section className="row pb-5">
            <>
            <div className="d-flex align-items-center flex-column">
                <button className="btn btn-outline-success mb-4" onClick={() => setModalIsOpen(true)}><PlusIcon/></button>
                <div className="d-flex w-100 align-items-center justify-content-center">
                    <Select
                    isFilter
                    name='game:'
                    options={games.map((game) => game.title)}
                    currentValue={gameFilter}
                    onChange={(value: string) => setGameFilter (value)}
                    />
                    <Select
                    isFilter
                    name='gender:'
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