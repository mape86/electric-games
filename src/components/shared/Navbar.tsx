import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='d-flex justify-content-around navbar navbar-custom'>
          <Link className='active text-light fs-3 fw-bold text-decoration-none' to='/'> Home </Link>
          <Link className='active text-light fs-3 fw-bold text-decoration-none' to='ConsolePage'> Consoles </Link>
          <Link className='active text-light fs-3 fw-bold text-decoration-none' to='CharacterPage'>Characters</Link>  
        </nav>
      )
} 

export default Navbar; 