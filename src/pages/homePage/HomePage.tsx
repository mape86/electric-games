import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import "./HomePage.css";
import "../shared/Pages.css";
import HomepageGameSection from "../../components/homePage/HomepageGameSection";
import { homePageData } from "./data";
import ElectricMemoryGame from "./electricMemoryGame/ElectricMemoryGame";
import AllGames from "../allGames/AllGames";

const HomePage = () => {
  return (
    <>
      <div className="home-page">
        <div className="page-header header-home-page">
          <h1 className="header-font-face-ofe">Electric Games</h1>
        </div>

        <section className="home-page-paragraph">
          <p>
            Adventurous, Cinematic games brought to you by Electric Games Inc.
            Come join our original worlds and experience our creative stories!
          </p>
        </section>

        <div>
          <h3>Featured Games</h3>
        </div>

        {homePageData.map((entry) => (
          <HomepageGameSection key={entry.className} {...entry} />
        ))}

        <div className="d-flex align-items-center pt-4">
          <button className="home-page-btn btn btn-warning" onClick={AllGames}>
            Show All Games
          </button>
        </div>

        <section className="electric-memory-game-section">
          <ElectricMemoryGame />
        </section>
      </div>
    </>
  );
};

export default HomePage;
