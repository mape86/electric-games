import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Footer from "./components/shared/Footer";
import {
  HomePage,
  CharacterPage,
  ConsolePage,
  AssassinsCreed,
  PlagueTalePage,
  RedDeadRedemtion,
  Skyrim,
  TheLastOfUsPage,
  TheWitcherPage,
  TombRaiderPage,
  UnchartedPage,
} from "./pages/index";
import Navbar from "./components/shared/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar />
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="CharacterPage" element={<CharacterPage />} />
          <Route path="ConsolePage" element={<ConsolePage />} />
          <Route path="AssassinsCreed" element={<AssassinsCreed />} />
          <Route path="PlagueTalePage" element={<PlagueTalePage />} />
          <Route path="RedDeadRedemtion" element={<RedDeadRedemtion />} />
          <Route path="Skyrim" element={<Skyrim />} />
          <Route path="TheLastOfUsPage" element={<TheLastOfUsPage />} />
          <Route path="TheWitcherPager" element={<TheWitcherPage />} />
          <Route path="TombRaiderPage" element={<TombRaiderPage />} />
          <Route path="UnchartedPage" element={<UnchartedPage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
