import { FC } from "react";
import IGameConsole from "../../interfaces/IGameConsole";
import Card from "../shared/Card";

const GameConsoleItem: FC<IGameConsole> = ({id, model, brand, price, description, image}) => {
    
    return (
    <article className="col-lg-4 col-md-6 col-sm-12 g-4">
        <Card>
            <img className="card-img-top" src={`https://localhost:7003/images/consoles/${image}`} alt="console"/>
            <h4>{brand}</h4>
            <h3>{model}</h3>
            <p>{description}</p>
            <h4>Price NOK: {price.toFixed(2)}</h4>
        </Card>
    </article>
    )
}

export default GameConsoleItem