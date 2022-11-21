import { useState, ChangeEvent} from "react";
import ElectricGamesService from "../../services/ElectricGamesService";

const UploadImage = () => {
const [image, setImage] = useState<File | null>(null)

const setImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const {files} = e.target;

        if(files!=null){
            const file = files[0]

            setImage(file)
        }
    }

    const imageUpload = () => {
        if(image!=null){
            ElectricGamesService.uploadImage(image)
        }
    }
}

    export default UploadImage