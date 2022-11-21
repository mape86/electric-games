import ICharacter from "./ICharacter";

interface ICharacterContext{
    characters: ICharacter[];
    updateCharacter: (c: ICharacter) => void
    filterCharacter: (c: ICharacter) => void
}

export default ICharacterContext