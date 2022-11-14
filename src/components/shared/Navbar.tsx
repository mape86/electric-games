import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='d-flex justify-content-around navbar navbar-custom'>
          
            
              <Link className='text-decoration-none' to='/'> Home </Link>
              <Link className='btn btn-large btn-rounded btn-outline-light' to='ConsolePage'> Consoles </Link>
              <Link className='btn btn-large btn-rounded btn-outline-light' to='CharacterPage'>Characters</Link>
            
          
        </nav>
      )
} 

export default Navbar; 