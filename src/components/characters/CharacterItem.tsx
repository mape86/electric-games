import ICharacter from "../../interfaces/ICharacter"
import {FC, useContext, useEffect, useState} from 'react';
import Card from "../shared/Card";
import { GameContext } from "../../contexts/GameContext";
import IGameContext from "../../interfaces/IGameContext";
import Select from "../shared/Select";
import { CharacterContext } from "../../contexts/CharacterContext";
import ICharacterContext from "../../interfaces/ICharacterContext";

const CharacterItem: FC<ICharacter> = ({id, name, gender, game, description, image}) => {
    /*TODO: Add images and fix image URL (<img />)*/ 
    const [shouldEdit, setShouldEdit] = useState(false)
    const [nameInput, setNameInput] = useState(name)
    const [genderInput, setGenderInput] = useState(gender)
    const [gameInput, setGameInput] = useState(game)
    const [descriptionInput, setDescriptionInput] = useState(description)
    const {games} = useContext(GameContext) as IGameContext
    const {updateCharacter} = useContext(CharacterContext) as ICharacterContext

    const cardContent = () => (
        <>
            <h3>{name}</h3>
            <h5> ID: {id}</h5>
            <p>Gender: {gender}</p>
            <p>Appearing in: {game}.</p>
            <p><i>"{description}"</i></p>
        </>
    )

    const cardEditContent = () => (
        <>
        <div className="mb-3">
            
        <label>Name:</label>
        <input className="form-control bg-dark text-white" type="text" value={nameInput} onChange={(e) => setNameInput(e.target.value) } />
        </div>
        <div className="mb-3">
        <Select 
        name='Gender:'
        options={["Male", "Female"]} 
        currentValue={genderInput} 
        onChange={(value: string) => setGenderInput(value)}
        />
        </div>
        <div className="mb-3">
        <Select 
        name='Appears in:' 
        options={games.map((game)=> game.title)} 
        currentValue={gameInput} 
        onChange={(value: string) => setGameInput(value)}
        />
        </div>
        <div className="mb-3">
        <label>Description:</label>
        <textarea className="form-control bg-dark text-white" rows={10} value={descriptionInput} onChange={(e) => setDescriptionInput(e.target.value)}></textarea>
        </div>
        <div className="d-flex align-self- justify-content-end w-100"></div>
        </>
    )

    const handleUpdate = () => {
        const character: ICharacter = {
            id,
            image,
            name: nameInput,
            gender: genderInput,
            game: gameInput,
            description: descriptionInput
        }

        updateCharacter(character)
        setShouldEdit(false)
    }

    return (
        <article className="d-flex col-lg-4 col-md-6 col-sm-12 g-4">
            <Card>
                <img className="card-img-top" src={`https://localhost:7003/images/characters/${image}`} alt="" />
                <div style={{flex: 1}} className="p-3 d-flex flex-column">
                {shouldEdit ? cardEditContent() : cardContent()}
            
                <div style={{flex: 1}} className="d-flex justify-content-end align-items-end w-100">
                {shouldEdit ?
                <>
                <button className="btn btn-outline-success mx-2 " onClick={handleUpdate}>Save</button>
                <button className="btn btn-outline-danger" onClick={() => setShouldEdit(false)}>Cancel</button> 
                </> 
                :
                <>
                <button className="btn btn-sm btn-outline-light mx-2">Delete</button>
                <button className="btn btn-sm btn-outline-light" onClick={() => setShouldEdit(true)}>Edit</button>
                </>
                }
                </div>
            </div>
            </Card>
        </article>
    )
}

export default CharacterItem