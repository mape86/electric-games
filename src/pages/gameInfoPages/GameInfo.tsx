import IGame from "../../interfaces/IGame";
import "./GameInfo.css";

interface GameInfoProps {
  game: IGame;
}

const classNameMap: Record<string, string> = {
  "A Plague Tale: Requiem": "aplaguetale",
  "Shadow Of The Tomb Raider": "tombraider",
  "Last of Us: Part II": "lastofus",
  "Uncharted 4: A Thief's End": "uncharted",
};

const GameInfo = ({ game }: GameInfoProps) => {
  const gameTitleClassName = classNameMap[game.title];

  return (
    <div className={`${gameTitleClassName} gameinfo-page-wrapper`}>
      <div className="game-info-header ">
        <h1>{game.title}</h1>
        <button>BUY NOW</button>
      </div>

      <section className="gameinfo-about-section">
        <h2>About</h2>
        <p>{game.description}</p>
      </section>

      <section className="gameinfo-details-section">
        <h2>Game Details</h2>
        <ul>
          <li>Title: {game.title}</li>
          <li>Platform: {game.platform}</li>
          <li>Release Year: {game.releaseYear}</li>
          <li>Publisher: {game.publisher}</li>
          <li>Genre: {game.genre}</li>
          <li>Price: {game.price}</li>
        </ul>
      </section>

      <div className="game-info-img-1"></div>
      <div className="gameinfo-img-2"></div>
      <div className="gameinfo-img-3"></div>
      <div className="gameinfo-img-4"></div>
    </div>
  );
};

export default GameInfo;
