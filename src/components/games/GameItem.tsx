import { FC } from "react";
import IGame from "../../interfaces/IGame";
import Card from "../shared/Card";

const GameItem: FC<IGame> = ({id, title, description, platform, releaseYear, publisher, genre, price, heroImage}) => {
    return(
        <article className="col-lg-4 col-md-6 col-sm-12 g-4">
            <Card>
                <img className="card-img-top" src={`https://localhost:7003/images/games/${heroImage}`} alt=""/>
                <h3>{title}</h3>
                <h5>ID: {id}</h5>
                <h6>{platform}</h6>
                <h6>Genre: {genre}</h6>
                <p>Release year: {releaseYear}</p>
                <p>{description}</p>
                <p>Price NOK: {price.toFixed(2)}</p>
                <p>Publisher: {publisher}</p>
            </Card>
        </article>
    )
}

export default GameItem