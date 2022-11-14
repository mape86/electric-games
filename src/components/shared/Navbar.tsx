import {Link} from 'react-router-dom'
import {HomePage, CharacterPage, ConsolePage} from '../../pages/index';

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg'>
          <div className='container'></div>
            <div className='d-flex flex-row'>
              <Link className='btn btn-large btn-rounded btn-outline-light' to='/'> Home </Link>
              <Link to='ConsolePage'> Consoles </Link>
              <Link to='CharacterPage'>Characters</Link>
            </div>
        </nav>
      )
} 

export default Navbar; 