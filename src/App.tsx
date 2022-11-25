import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./pages/index.css";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import { HomePage, AllGames, CharacterPage, ConsolePage } from "./pages/index";
import GameInfo from "./pages/gameInfoPages/GameInfo";
import { GameContext } from "./contexts/GameContext";
import IGameContext from "./interfaces/IGameContext";
import { useContext } from "react";

function App() {

  const {games} = useContext(GameContext) as IGameContext;

  const lastOfUs  = games.find(game=> game.title == "Last of Us: Part II");
  const plagueTale = games.find(game=> game.title == "A Plague Tale: Requiem");
  const tombraider = games.find(game=> game.title == "Shadow Of The Tomb Raider");
  const uncharted = games.find(game=> game.title == "Uncharted 4: A Thief's End");

  return (
    <>
        <div>
          <Navbar />
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="AllGames" element={<AllGames />} />
          <Route path="CharacterPage" element={<CharacterPage />} />
          <Route path="ConsolePage" element={<ConsolePage />} />
          <Route path="TheLastOfUs" element={<GameInfo input={lastOfUs}/>} />
          <Route path="PlagueTale" element={<GameInfo input={plagueTale}/>} />
          <Route path="TombRaider" element={<GameInfo input={tombraider}/>} />
          <Route path="Uncharted" element={<GameInfo input={uncharted}/>} />
        </Routes>

        <Footer />
    </>
  );
}

export default App;
