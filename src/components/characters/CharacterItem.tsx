import ICharacter from "../../interfaces/ICharacter"
import {FC} from 'react';

const CharacterItem: FC<ICharacter> = ({id, name, gender, game, description, image}) => {
    return (
        <article>
            <h3>{name} - ID: {id}</h3>
            <p>A {gender}, appearing in {game}.</p>
            <p><i>"{description}"</i></p>
            <div>{image}</div>
        </article>
    )
}

export default CharacterItem