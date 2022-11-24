import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./pages/index.css";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import { HomePage, AllGames, CharacterPage, ConsolePage } from "./pages/index";
import GameInfo from "./pages/gameInfoPages/GameInfo";

function App() {
  return (
    <>
        <div>
          <Navbar />
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="GameInfo/:id" element={<GameInfo/>}/>
          <Route path="AllGames" element={<AllGames />} />
          <Route path="CharacterPage" element={<CharacterPage />} />
          <Route path="ConsolePage" element={<ConsolePage />} />
          {/* <Route path="GameInfo" element={<GameInfo game={game} />} /> */}
        </Routes>

        <Footer />
    </>
  );
}

export default App;
