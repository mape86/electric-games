import { Link } from "react-router-dom";
import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <div className="home-page">
        <div className="header-home-page">
          <h1>Electric Games</h1>
        </div>

        <section className="home-page-paragraph">
          <p>
            Adventurous, Cinematic games brought to you by Electric Games Inc.
            Come join our original worlds and experience our creative stories!
          </p>
        </section>

        <section className="plagues-tale">
          <h1>A Plagues Tale</h1>
          <Link to="PlagueTalePage">Read more</Link>
        </section>

        <section className="tomb-raider">
          <h1>Shadow of the Tomb Raider</h1>
          <Link to="TombRaiderPage">Read more</Link>
        </section>

        <section className="the-last-of-us">
          <h1>The Last of Us</h1>
          <Link to="TheLastOfUsPage">Read more</Link>
        </section>

        <section className="uncharted">
          <h1>Uncharted 4</h1>
          <Link to="UnchartedPage">Read more</Link>
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
