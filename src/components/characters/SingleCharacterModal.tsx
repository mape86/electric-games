import {useState } from "react";
import ICharacter from "../../interfaces/ICharacter";
import ElectricGamesService from "../../services/ElectricGamesService";
import "./Modal.css"
import CharacterItem from "./CharacterItem";


interface SingleCharacterModalProps {
    onClose: () => void
}

const SingleCharacterModal = ({ onClose}: SingleCharacterModalProps) => {

    const [id, setId] = useState<string>('0')
    const [character, setCharacter] = useState<ICharacter | null>(null)

    const getCharacterById = async () => {
        await ElectricGamesService.getCharacterById(Number(id)).then(result => setCharacter(result)) 
    }

    return(
        <div id="overlay">
        <div id="layout">
        <button id="modal-close-btn" className="btn btn-outline-warning" onClick={onClose}>X</button>
            <input className="form-control-sm bg-dark text-white input-field" name="id" type="text" value={id} onChange={(e) => setId(e.target.value)} />
            <button className="btn btn-warning mt-2 m-2" onClick={getCharacterById}>Get character</button>
            {character ?
            <CharacterItem {...character} singleItem/>
            : 
            <p>No matching character</p>
            }
            </div>
        </div>
    )
}

export default SingleCharacterModal