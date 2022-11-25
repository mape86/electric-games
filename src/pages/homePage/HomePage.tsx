import "./HomePage.css";
import "../shared/Pages.css";
import HomepageGameSection from "../../components/homePage/HomepageGameSection";
import { homePageData } from "./data";
import ElectricMemoryGame from "./electricMemoryGame/ElectricMemoryGame";
import { Link } from "react-router-dom";

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

        <div className="d-flex justify-content-center pt-4">
          <Link to="/AllGames">
          <button className="home-page-btn btn btn-warning">
            Show All Games
          </button>
          </Link>
        </div>

        <section className="electric-memory-game-section">
          <ElectricMemoryGame />
        </section>
      </div>
    </>
  );
};

export default HomePage;
