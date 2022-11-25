import axios from "axios";
import ICharacter from "../interfaces/ICharacter";

const ElectricGamesService = (
    () => {

        const ElectriGamesEndpoint = {
            characters: "https://localhost:7003/Character",
            game: "https://localhost:7003/Game",
            gameConsole: "https://localhost:7003/GameConsole",
            imageUpload: "https://localhost:7003/ImageUpload"
        }

        const getAllCharacters = async () => {
            const result = await axios.get(ElectriGamesEndpoint.characters);
            return result.data;
        }

        const getCharacterById = async (id: number) => {
            const result = await axios.get(`${ElectriGamesEndpoint.characters}/${id}`);
            return result.data;
        }

        const putCharacter = async (editedCharacter: ICharacter) => {
            const result = await axios.put(ElectriGamesEndpoint.characters, editedCharacter);
            return result.data;
        } 

        const deleteCharacter = async (id: number) => {
            const result = await axios.delete(`${ElectriGamesEndpoint.characters}/${id}`);
            return result;
        }

        const postCharacter = async (character: ICharacter) => {
            const result = await axios.post(ElectriGamesEndpoint.characters, character);
            return result;
        }

        const getAllGames = async () =>{
            const result = await axios.get(ElectriGamesEndpoint.game);
            return result.data; 
        }

        const getAllConsoles = async () =>{
            const result = await axios.get(ElectriGamesEndpoint.gameConsole); 
            return result.data; 
        } 
        
        const getConsoleByBrand = async (brand: string) =>{
            const result = await axios.get(`${ElectriGamesEndpoint.gameConsole}/getConsoleByBrand/${brand}`)
            return result.data; 
        }

        const uploadImage = async (img: File) => {
            const formData = new FormData();
            formData.append("file", img)
            
            const result = await axios({
                url: ElectriGamesEndpoint.imageUpload,
                method: "POST",
                data: formData,
                headers:{"Content-Type" : "multipart/form-data"}
            })

            formData.delete("file")
        }

        return {
            getAllCharacters, 
            getCharacterById, 
            putCharacter, 
            deleteCharacter, 
            postCharacter,
            getAllGames,
            getAllConsoles,
            getConsoleByBrand,
            uploadImage
        }


    }
)()

export default ElectricGamesService