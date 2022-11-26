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

const GameInfo = ({ input }) => {
  const [game, setGame] = useState<IGame | null>(null);
  const [error, setError] = useState(false);

  const getGame = () => {
    setGame(input);
  };

  useEffect(() => {
    getGame();
  }, []);

  const gameTitleClassName = game ? classNameMap[game.title] : "";

  if (!game && !error) {
    return <div>Loading gameinfo</div>;
  }

  if (error) {
    return <div>Oops, something went wrong. Please try again!</div>;
  }

  return (
    <div className={`${gameTitleClassName} game-info-wrapper `}>
      <div className="game-info-header game-info-images">
        <h1 className="game-info-h1">{game?.title}</h1>
        <button className="btn btn-warning game-info-header-btn">Buy Now</button>
      </div>

      <div className="about-section-container">
        <section className="game-info-about-section">
          <h2 className="text-warning">About</h2>
          <p>{game?.description}</p>
        </section>
      </div>

      <div className="game-info-container">
        <section className="game-info-details-section">
          <h2 className="text-warning">Game Details</h2>
          <ul className="list-group">
            <li className="list-group-item list-group-item-dark">Title: {game?.title}</li>
            <li className="list-group-item list-group-item-dark">Platform: {game?.platform}</li>
            <li className="list-group-item list-group-item-dark">Release Year: {game?.releaseYear}</li>
            <li className="list-group-item list-group-item-dark">Publisher: {game?.publisher} ©</li>
            <li className="list-group-item list-group-item-dark">Genre: {game?.genre}</li>
            <li className="list-group-item list-group-item-dark">Price: NOK {game?.price.toFixed(2)}</li>
          </ul>
        </section>
      </div>

      <div
        className={`${gameTitleClassName} game-info-img-1 game-info-images`}
      ></div>
      <div
        className={`${gameTitleClassName} game-info-img-2 game-info-images`}
      ></div>
      <div
        className={`${gameTitleClassName} game-info-img-3 game-info-images`}
      ></div>
      <div
        className={`${gameTitleClassName} game-info-img-4 game-info-images`}
      ></div>
    </div>
  );
};

export default GameInfo;
