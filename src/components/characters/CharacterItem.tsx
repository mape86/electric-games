import ICharacter from "../../interfaces/ICharacter"
import {FC} from 'react';
import Card from "../shared/Card";

const CharacterItem: FC<ICharacter> = ({id, name, gender, game, description, image}) => {
    /*TODO: Add images and fix image URL (<img />)*/ 
    return (
        <Card>
            <div>{image}</div>
            <h3>{name}</h3>
            <h5>ID: {id}</h5>
            <p>A {gender}, appearing in {game}.</p>
            <p><i>"{description}"</i></p>
         </Card>
        
    )
}

export default CharacterItem