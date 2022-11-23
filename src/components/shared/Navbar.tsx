import {useState, useEffect, useCallback} from 'react'
import {Link, useLocation} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [hasColor, setHasColor] = useState(false);
  const [headerShouldChange, setHeaderShouldChange] = useState(false)
  const location = useLocation();


  const handleScroll = useCallback( () => {
    setHasColor(window.scrollY > 630)
  }, [])

    useEffect(() => {
        const shouldChange = location.pathname !== "/"
        setHeaderShouldChange(shouldChange)
    }, [location.pathname])
  
  useEffect(() => {
    if(window && !headerShouldChange) window.removeEventListener("scroll", handleScroll)
    if(window && headerShouldChange) window.addEventListener("scroll", handleScroll)
  },[headerShouldChange]);

    return (
        <nav  className={`d-flex justify-content-around navbar ${hasColor && headerShouldChange ? "navbar-custom-solid" : "navbar-custom"}`}>
          <Link className='active text-light fs-5 fw-bold text-decoration-none' to='/'> Home </Link>
          <Link className='active text-light fs-5 fw-bold text-decoration-none' to='ConsolePage'> Consoles </Link>
          <Link className='active text-light fs-5 fw-bold text-decoration-none' to='AllGames'> All Games </Link>
          <Link className='active text-light fs-5 fw-bold text-decoration-none' to='CharacterPage'>Characters</Link>  
        </nav>
      )
} 

export default Navbar;