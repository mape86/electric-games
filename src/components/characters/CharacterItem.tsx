import ICharacter from "../../interfaces/ICharacter"
import {FC, useContext, useState} from 'react';
import Card from "../shared/Card";
import { GameContext } from "../../contexts/GameContext";
import IGameContext from "../../interfaces/IGameContext";
import Select from "../shared/Select";
import { CharacterContext } from "../../contexts/CharacterContext";
import ICharacterContext from "../../interfaces/ICharacterContext";

interface ItemProps extends ICharacter {
    singleItem?: boolean
}

const CharacterItem: FC<ItemProps> = ({id, name, gender, game, description, image, singleItem}) => {
    const [shouldEdit, setShouldEdit] = useState(false)
    const [nameInput, setNameInput] = useState(name)
    const [genderInput, setGenderInput] = useState(gender)
    const [gameInput, setGameInput] = useState(game)
    const [descriptionInput, setDescriptionInput] = useState(description)
    const {games} = useContext(GameContext) as IGameContext
    const {updateCharacter, deleteCharacter} = useContext(CharacterContext) as ICharacterContext

    const CardContent = () => (
        <>
            <h3>{name}</h3>
            <h5>ID: {id}</h5>
            <p>Gender: {gender}</p>
            <p>Appearing in: {game}.</p>
            <p><i>"{description}"</i></p>
        </>
    )

    const CardEditContent = () => (
        //Function using a Select component retrieve original values in input fields, and enables editing with useState. Using gameContext to map the games the characters are in.
        <>
        <div className="mb-3">
        <label>Name:</label>
        <input className="form-control bg-dark text-white" type="text" value={nameInput} onChange={(e) => setNameInput(e.target.value) } />
        </div>
        <div className="mb-3">
        <Select 
        name='Gender:'
        options={["Female", "Male"]} 
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
        <div className="d-flex align-self justify-content-end w-100"></div>
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

    const handleDelete = (id?: number) => {
        deleteCharacter(Number(id)) 
    }

    const articleClassName = singleItem ? "w-100" : "d-flex col-lg-4 col-md-6 col-sm-12 g-4"

    //Using ternary operator to return edited content if edited, else return the full orginial list. 
    return (
        <article className={articleClassName}>
            <Card>
                <img className="card-img-top character-img" src={`https://localhost:7003/images/characters/${image}`} alt="" />
                <div style={{flex: 1}} className="p-3 d-flex flex-column">
                {shouldEdit ? <CardEditContent/> : <CardContent/>}
            
                <div style={{flex: 1}} className="d-flex justify-content-end align-items-end w-100">
                {shouldEdit ?
                <>
                <button className="btn btn-outline-warning mx-2 " onClick={handleUpdate}>Save</button>
                <button className="btn btn-outline-danger" onClick={() => setShouldEdit(false)}>Cancel</button> 
                </> 
                :
                <>
                <button className="btn btn-sm btn-danger mx-2" onClick={() => handleDelete(id)}>Delete</button>
                <button className="btn btn-sm btn-outline-warning" onClick={() => setShouldEdit(true)}>Edit</button>
                </>
                }
                </div>
            </div>
            </Card>
        </article>
    )
}

export default CharacterItem