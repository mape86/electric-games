import UploadImage from "../shared/UploadImage"
import { ChangeEvent, useState } from "react"
import "./AddCharacterModal.css"
import ICharacter from "../../interfaces/ICharacter"

interface ModalProps {
    handleAdd: (c: ICharacter) => void
    onClose: () => void
}

const AddCharacterModal = ({handleAdd, onClose}:ModalProps) => {

    const [name, setName] = useState<string>("")
    const [game, setGame] = useState<string>("")
    const [gender, setGender] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [image, setImage] = useState<string>("")

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.currentTarget;

        switch(name){
            case "name":
                setName(value)
            break;
            case "game":
                setGame(value)
            break;
            case "gender":
                setGender(value)
            break;
            case "description":
                setDescription(value)
            break;
            case "image":
                setImage(value)
            break;
        }
    }
    
    const saveCharacter = () => {
        const character = {
            name: name,
            game: game,
            gender: gender,
            description: description,
            image: image
        }
        handleAdd(character)
    }

    return (
        <div id="overlay">
        <div style={{width: "60%", padding: "50px", borderRadius: "10px", backgroundColor: "darkgray", position: "relative"}} >
            <button style={{position: "absolute", top: "20px", right: "20px"}} onClick={onClose} >X</button>
            <label>Name:</label>
            <input name="name" className="form-control bg-dark text-white" type="text" value={name} onChange={handleChange}/>
            <label>Gender:</label>
            <select name="gender" className="form-control bg-dark text-white">
                <option value={gender}>Female</option>
                <option value={gender}>Male</option>
            </select>
            <label>Game:</label>
            <input name="game" className="form-control bg-dark text-white" type="text" value={game} onChange={handleChange}/>
            <label>Description:</label>
            <textarea name="description" className="form-control bg-dark text-white" rows={10} value={description} onChange={(e) => setDescription(e.target.value)}/>
            <label>Image:</label>
            <input onChange={UploadImage} type="file" value={image}/>
            <div className="mb-2 mt-2">
                <button className="btn btn-outline-light">Upload image</button>
            </div>
            <div>
                <button className="btn btn-outline-success" onClick={saveCharacter}>Save character</button>
            </div>
        </div>
        </div>
    )
}

export default AddCharacterModal