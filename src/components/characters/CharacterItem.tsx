import ICharacter from "../../interfaces/ICharacter"
import {FC} from 'react';
import Card from "../shared/Card";

const CharacterItem: FC<ICharacter> = ({id, name, gender, game, description, image}) => {
    /*TODO: Add images and fix image URL (<img />)*/ 
    return (
        <article className="col-lg-4 col-md-6 col-sm-12">
            <Card>
                <h3>{name} - ID: {id}</h3>
                <p>A {gender}, appearing in {game}.</p>
                <p><i>"{description}"</i></p>
                <div>{image}</div>
            </Card>
        </article>
    )
}

export default CharacterItem