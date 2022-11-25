import { ChangeEvent, useContext, useEffect, useState } from "react";
import { CharacterContext } from "../../contexts/CharacterContext";
import ICharacter from "../../interfaces/ICharacter";
import ICharacterContext from "../../interfaces/ICharacterContext";
import ElectricGamesService from "../../services/ElectricGamesService";
import CharacterItem from "./CharacterItem";
import "./AddCharacterModal.css"


interface SingleCharacterModalProps {
    handleSingleCharacter: (c: ICharacter) => void
    onClose: () => void
}

const SingleCharacterModal = ({handleSingleCharacter, onClose}: SingleCharacterModalProps) => {
    console.log("inside")

    const [id, setId] = useState<string>('0')
    const [character, setCharacter] = useState()
    const {characters} = useContext(CharacterContext) as ICharacterContext

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.currentTarget;

        switch(name){
            case "id":
                setId(value);
            break;
        }
    }

    const getCharacterById = async () => {
        let result = await ElectricGamesService.getCharacterById(Number(id))
        console.log(result)
        result = characters.filter((character) => character.id == result.id)
        setCharacter(result)
        handleSingleCharacter(result)
        console.log("inside getbyID")
        
    }

    return(
        <div id="overlay">
        <div id="layout">
            <input className="form-control-sm bg-dark text-white input-field" name="id" type="text" value={id} onChange={changeHandler} />
            <button className="btn btn-outline-light mt-2" onClick={getCharacterById}>Get character</button>
            <button onClick={onClose}>Close</button>
            </div>
        </div>
    )
}

export default SingleCharacterModal