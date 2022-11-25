import { useEffect, useState } from "react";
import IGame from "../../interfaces/IGame";
import "./GameInfo.css";

const classNameMap: Record<string, string> = {
  "A Plague Tale: Requiem": "aplaguetale",
  "Shadow Of The Tomb Raider": "tombraider",
  "Last of Us: Part II": "lastofus",
  "Uncharted 4: A Thief's End": "uncharted",
  "The Witcher 3: Wild Hunt": "thewitcher",
  "Red Dead Redemption II": "reddead",
  "Assassins Creed: Unity": "assassins",
  "The Elder Scrolls V: Skyrim": "skyrim",
};

const GameInfo = ({input}) => {
  const [game, setGame] = useState<IGame | null>(null);
  const [error, setError] = useState(false);

  //const { id } = useParams();

  const getGame = () => {
    setGame(input)
  };

  useEffect(() => {
    getGame()
  }, []);

  const gameTitleClassName = game ? classNameMap[game.title] : "";
 
  if (!game && !error) {
    return <div>Loading gameinfo</div>;
  }

  if (error) {
    return <div>Oops, something went wrong. Please try again!</div>;
  }

  return (    
    <div className={`${gameTitleClassName} game-info-wrapper`}>
      <div className="game-info-header ">
        <h1>{game?.title}</h1>
        <button>BUY NOW</button>
      </div>

      <section className="gameinfo-about-section">
        <h2>About</h2>
        <p>{game?.description}</p>
      </section>

      <section className="gameinfo-details-section">
        <h2>Game Details</h2>
        <ul>
          <li>Title: {game?.title}</li>
          <li>Platform: {game?.platform}</li>
          <li>Release Year: {game?.releaseYear}</li>
          <li>Publisher: {game?.publisher}</li>
          <li>Genre: {game?.genre}</li>
          <li>Price: {game?.price}</li>
        </ul>
      </section>

      <div className={`${gameTitleClassName} game-info-img-1`}></div>
      <div className={`${gameTitleClassName} game-info-img-2`}></div>
      <div className={`${gameTitleClassName} game-info-img-3`}></div>
      <div className={`${gameTitleClassName} game-info-img-4`}></div>
    </div>
  );
};

export default GameInfo;