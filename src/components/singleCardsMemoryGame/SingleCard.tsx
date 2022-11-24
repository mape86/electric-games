import "./SingleCard.css";
import cover4 from "../../pages/homePage/electricMemoryGame/MemoryGameImages/cover4.jpg";
function SingleCard({ gameCard, handleChoice, flippedCard }) {
  const handleClick = () => {
    handleChoice(gameCard);
  };

  return (
    <div className="game-card">
      <div className={flippedCard ? "flipped-card" : ""}>
        <img
          className="game-card-front"
          src={gameCard.src}
          alt="Memory GameCard frontside"
        />
        <img
          className="game-card-back"
          src={cover4}
          onClick={handleClick}
          alt="Memory GameCard backside"
        />
      </div>
    </div>
  );
}

export default SingleCard;
