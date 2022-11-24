import { useEffect, useState } from "react";
import "./ElectricMemoryGame.css";
import SingleCard from "../../../components/singleCardsMemoryGame/SingleCard";
import plagueTaleCard from "./MemoryGameImages/plaguetalecard.jpg";
import redDeadCard from "./MemoryGameImages/reddeadcard.jpg";
import skyrimCard from "./MemoryGameImages/skyrimcard.jpg";
import theWitcherCard from "./MemoryGameImages/thewitchercard.jpg";
import tombRaiderCard from "./MemoryGameImages/tombraidercard.jpg";
import unchartedCard from "./MemoryGameImages/unchartedcard.jpg";

const gameCardImages: object[] = [
  {
    src: plagueTaleCard,
    matched: false,
  },
  { src: redDeadCard, matched: false },
  { src: skyrimCard, matched: false },
  { src: theWitcherCard, matched: false },
  { src: tombRaiderCard, matched: false },
  { src: unchartedCard, matched: false },
];

function ElectricMemoryGame() {
  const [gameCards, setGameCards] = useState([]);
  const [turns, setGame] = useState(0);
  const [cardOne, setCardOne] = useState(null);
  const [cardTwo, setCardTwo] = useState(null);

  const shuffleCards = () => {
    const shuffled: any = [...gameCardImages, ...gameCardImages]
      .sort(() => Math.random() - 0.5)
      .map((gameCard) => ({ ...gameCard, id: Math.random() }));

    setGameCards(shuffled);
    setGame(0);
  };

  // handles the chosen cards
  const handleChoice = (gameCard: any) => {
    cardOne ? setCardTwo(gameCard) : setCardOne(gameCard);
  };

  // compare the two cards
  useEffect(() => {
    if (cardOne && cardTwo) {
      if (cardOne["src"] === cardTwo["src"]) {
        setGameCards((prevGameCards: any) => {
          return prevGameCards.map((gameCard: any) => {
            if (gameCard["src"] === cardOne["src"]) {
              return { ...gameCard, matched: true };
            } else {
              return gameCard;
            }
          });
        });
        resetGame();
      } else {
        setTimeout(() => resetGame(), 1000);
      }
    }
  }, [cardOne, cardTwo]);

  // reset and increase turn
  const resetGame = () => {
    setCardOne(null);
    setCardTwo(null);
    setGame((prevTurns) => prevTurns + 1);
  };

  return (
    <div className="electric-memory-game">
      <h1>Electric memory Game</h1>

      <div className="game-card-grid">
        {gameCards.map((gameCard) => (
          <SingleCard
            key={gameCard["id"]}
            gameCard={gameCard}
            handleChoice={handleChoice}
            flippedCard={
              gameCard === cardOne ||
              gameCard === cardTwo ||
              gameCard["matched"]
            }
          />
        ))}
      </div>
      <button className="memory-game-btn" onClick={shuffleCards}>
        New Game
      </button>
    </div>
  );
}

export default ElectricMemoryGame;
