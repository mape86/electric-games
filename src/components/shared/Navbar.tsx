import {useState, useEffect} from 'react'
import {Link, useLocation} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [hasColor, setHasColor] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if(window && location.pathname === "/CharacterPage") {
      window.addEventListener("scroll", () =>
      setHasColor(window.scrollY > 650)
      );
    }
  }, []);


    return (
        <nav  className={`d-flex justify-content-around navbar ${hasColor ? "navbar-custom-solid" : "navbar-custom"}`}>
          <Link className='active text-light fs-5 fw-bold text-decoration-none' to='/'> Home </Link>
          <Link className='active text-light fs-5 fw-bold text-decoration-none' to='ConsolePage'> Consoles </Link>
          <Link className='active text-light fs-5 fw-bold text-decoration-none' to='AllGames'> All Games </Link>
          <Link className='active text-light fs-5 fw-bold text-decoration-none' to='CharacterPage'>Characters</Link>  
        </nav>
      )
} 

export default Navbar; 