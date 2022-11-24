import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IGame from "../../interfaces/IGame";
import "./GameInfo.css";
import ElectricGamesService from "../../services/ElectricGamesService";
import { GameContext } from "../../contexts/GameContext";

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

const GameInfo = () => {
  const [game, setGame] = useState<IGame | null>(null);
  const [error, setError] = useState(false);

  const { id } = useParams();

  const fetchGame = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3000/${id}`); // Må passe på at dette er riktig port til db
      setGame(data);
    } catch (e) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchGame();
  }, []);

  const gameTitleClassName = game ? classNameMap[game.title] : "";

  if (!game && !error) {
    return <div>Loading gameinfo</div>;
  }

  if (error) {
    return <div>Oops, something went wrong. Please try again!</div>;
  }

  return (
    <div className={`${gameTitleClassName} gameinfo-page-wrapper`}>
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

      <div className="game-info-img-1"></div>
      <div className="gameinfo-img-2"></div>
      <div className="gameinfo-img-3"></div>
      <div className="gameinfo-img-4"></div>
    </div>
  );
};

export default GameInfo;