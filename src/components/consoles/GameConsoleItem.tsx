import { FC } from "react";
import IGameConsole from "../../interfaces/IGameConsole";
import Card from "../shared/Card";

const GameConsoleItem: FC<IGameConsole> = ({id, model, brand, price, description, image}) => {
    
    return (
    <article className="col-lg-4 col-md-6 col-sm-12 g-4">
        <Card>
            <img className="card-img-top" src={`https://localhost:7003/images/consoles/${image}`} alt="console"/>
            <h3>{brand}</h3>
            <h4>{model}</h4>
            <h5>ID: {id}</h5>
            <p>{description}</p>
            <h4>Price NOK: {price}</h4>
        </Card>
    </article>
    )
}

export default GameConsoleItem