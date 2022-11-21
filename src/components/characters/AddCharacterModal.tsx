import UploadImage from "../shared/UploadImage"
import Card from "../shared/Card"
import { ChangeEvent, useState } from "react"

const AddCharacterModal = () => {

    const [name, setName] = useState<string>("Name not entered")
    const [game, setGame] = useState<string>("Game not entered")
    const [gender, setGender] = useState<string>("Gender not entered")
    const [description, setDescription] = useState<string>("No description entered")

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
        }
    }

    return (
        <Card className="">
            <label>Name:</label>
            <input name="name" className="form-control bg-dark text-white" type="text" value="Enter name" onChange={handleChange}/>
            <label>Gender:</label>
            <input name="gender" type="select" />
            <label>Game:</label>
            <input name="game" className="form-control bg-dark text-white" type="text" value={game} onChange={handleChange}/>
            <label>Description:</label>
            <textarea name="description" className="form-control bg-dark text-white" rows={10} value="Enter description" />
            <label>Image:</label>
            <input onChange={UploadImage} type="file"/>
            <div>
                <button className="btn btn-sm btn-outline-ligth">Upload image</button>
            </div>
        </Card>
    )
}

export default AddCharacterModal