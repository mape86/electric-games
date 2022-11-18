import axios from "axios";
import ICharacter from "../interfaces/ICharacter";
import IGame from "../interfaces/IGame";
import IGameConsole from "../interfaces/IGameConsole";

const ElectricGamesService = (
    () => {

        const ElectriGamesEndpoint = {
            characters: "https://localhost:7003/Character",
            game: "https://localhost:7003/Game",
            gameConsole: "https://localhost:7003/GameConsole" 
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

        return {
            getAllCharacters, 
            getCharacterById, 
            putCharacter, 
            deleteCharacter, 
            postCharacter,
            getAllGames
        }


    }
)()

export default ElectricGamesService