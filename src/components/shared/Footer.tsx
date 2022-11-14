
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
            <nav className="footer-nav-container">
                <ul className="footer-ul">
                    <li>Privacy</li>
                    <li>Legal</li>
                    <li>Terms</li>
                    <li>Terms</li>
                    <li>Cookie Policy</li>
                    <li>Cookie Settings</li>
                </ul>
            </nav>
        </footer>
      )
} 

export default Footer; 