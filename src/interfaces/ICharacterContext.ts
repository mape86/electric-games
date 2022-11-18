import ICharacter from "./ICharacter";

interface ICharacterContext{
    characters: ICharacter[];
    updateCharacter: (c: ICharacter) => void
}

export default ICharacterContext