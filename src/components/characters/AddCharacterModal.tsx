// import UploadImage from "../shared/UploadImage"
import { ChangeEvent, useState } from "react"
import "./AddCharacterModal.css"
import ICharacter from "../../interfaces/ICharacter"
import ElectricGamesService from "../../services/ElectricGamesService"

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
    const [img, setImg] = useState<File | null>(null)

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


    const setImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
            const {files} = e.target;
    
            if(files!=null){
                const file = files[0]
    
                setImg(file)
            }
        }
    
    const imageUpload = () => {
        if(img!=null){
            ElectricGamesService.uploadImage(img)
            console.log(img)
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
        <div id="layout" >
            <button id="modal-close-btn" onClick={onClose}>X</button>
            <label>Name:</label>
            <input name="name" className="form-control bg-dark text-white" type="text" value={name} onChange={handleChange}/>
            <label>Gender:</label>
            <select value={gender} name="gender" className="form-control bg-dark text-white" onChange={(e) => setGender(e.target.value)}>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
            </select>
            <label>Game:</label>
            <input name="game" className="form-control bg-dark text-white" type="text" value={game} onChange={handleChange}/>
            <label>Description:</label>
            <textarea name="description" className="form-control bg-dark text-white" rows={10} value={description} onChange={(e) => setDescription(e.target.value)}/>
            <label>Image:</label>
            <input id="upload" onChange={setImageHandler} type="file"/>
            <div className="mb-2 mt-2">
                <button className="btn btn-outline-light mx-2" onClick={imageUpload}>Upload image</button>
            </div>
            <div className="d-flex justify-content-between align-items-end">
                <button className="btn btn-outline-success mx-2 mb-2" onClick={saveCharacter}>Save character</button>
                <button className="btn btn-outline-danger mx-2 mb-2" onClick={onClose}>Cancel</button>
            </div>
        </div>
        </div>
    )
}

export default AddCharacterModal