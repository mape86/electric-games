import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-bg">
      <div className="d-flex justify-content-around">
        <div>
          <Link className="btn btn-large btn-rounded btn-outline-light" to="/">
            Home
          </Link>
        </div>
        <div>
          <Link
            className="btn btn-large btn-rounded btn-outline-light"
            to="ConsolePage"
          >
            Consoles
          </Link>
        </div>
        <div>
          <Link
            className="btn btn-large btn-rounded btn-outline-light"
            to="CharacterPage"
          >
            Characters
          </Link>
        </div>
        <div>
          <Link
            className="btn btn-large btn-rounded btn-outline-light"
            to="AllGamesPage"
          >
            All games
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
