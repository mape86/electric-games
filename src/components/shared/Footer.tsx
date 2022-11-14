
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
                <h4>Electric Games</h4>
                <p>Electric games inc. All rights reserved.</p>
            </section>
            <nav className="footer-nav">
                    <Link to="" className="link-styling" >Privacy</Link>
                    <Link to="" className="link-styling" >Legal</Link>
                    <Link to="" className="link-styling" >Terms</Link>
                    <Link to="" className="link-styling" >Cookie Policy</Link>
                    <Link to="" className="link-styling" >Cookie Settings</Link>
            </nav>
        </footer>
      )
} 

export default Footer; 