import { Link } from "react-router-dom";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <section className="language-section">
        <select className="form-select form-select-sm">
          <option value="english">English(US)</option>
          <option value="norwegian">Norsk</option>
        </select>
      </section>
      <section className="rights-section">
        <h4 className="footer-logo">Electric Games</h4>
        <p>©2022 ELECTRIC GAMES, INC. ALL RIGHTS RESERVED.</p>
      </section>
      <nav className="footer-nav">
        <Link to="" className="link-styling link-border">
          Privacy
        </Link>
        <div className="vertical-line"></div>
        <Link to="" className="link-styling link-border">
          Legal
        </Link>
        <div className="vertical-line"></div>
        <Link to="" className="link-styling link-border">
          Terms
        </Link>
        <div className="vertical-line"></div>
        <Link to="" className="link-styling link-border">
          Cookie Policy
        </Link>
        <div className="vertical-line"></div>
        <Link to="" className="link-styling">
          Cookie Settings
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
