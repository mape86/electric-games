import ICharacter from "./ICharacter";

interface ICharacterContext{
    characters: ICharacter[];
    // singleCharacter: ICharacter[];
    updateCharacter: (c: ICharacter) => void
    addCharacter: (c: ICharacter) => void
    deleteCharacter: (id: number) => void
    // getCharacterById: (id: number) => void
}

export default ICharacterContext