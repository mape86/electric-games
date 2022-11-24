import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import "./HomePage.css";
import "../shared/Pages.css";
import HomepageGameSection from "../../components/homePage/HomepageGameSection";
import { homePageData } from "./data";
import ElectricMemoryGame from "./electricMemoryGame/ElectricMemoryGame";
import "../shared/fonts/our-friend-electric-font/OurFriendElectric-BWr8d.ttf";
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

        {homePageData.map((entry) => (
          <HomepageGameSection key={entry.className} {...entry} />
        ))}

        <div className="d-flex align-items-center pt-4">
          <button className="home-page-btn" onClick={AllGames}>
            Show All Games
          </button>
        </div>

        <section className="electric-memory-game-section">
          <ElectricMemoryGame />
        </section>

        <section className="character-home-page home-page-sections">
          <h1>Characters</h1>
        </section>

        <section className="consoles-home-page home-page-sections">
          <h1>Consoles</h1>
        </section>

        <section className="socials-section">
          <h3>Join our electric community!</h3>
          <section className="icon-group">
            <FaInstagram size={50} className="m-5" />
            <FaYoutube size={50} className="m-5" />
            <FaTwitter size={50} className="m-5" />
          </section>
        </section>
      </div>
    </>
  );
};

export default HomePage;
