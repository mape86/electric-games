import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import "./socialsbanner.css"; 

const SocialsBanner = () =>{
    return(
        <section className="socials-section">
            <h3>Join our electric community!</h3>
            <section className="icon-group">
                <FaInstagram size={50} className="m-5"/>
                <FaYoutube size={50} className="m-5"/>
                <FaTwitter size={50} className="m-5"/>
            </section>
        </section>
    );
}

export default SocialsBanner; 