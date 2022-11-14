import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Footer from './components/shared/Footer';
import {HomePage, CharacterPage, ConsolePage, AssassinsCreed, PlagueTalePage, RedDeadRedemtion, Skyrim, TheLastOfUsPage, TheWitcherPage, TombRaiderPage, UnchartedPage} from './pages/index'

function App() {
  return (
    <>
    <BrowserRouter>
    <div>
      <h1>Hello teammates!</h1>
    </div>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="AssassinsCreed">Assasins Creed</Link></li>
        <li><Link to="CharacterPage">Characters</Link></li>
        <li><Link to="ConsolePage">Consoles</Link></li>
        <li><Link to="PlagueTalePage">Plague Tale</Link></li>
        <li><Link to="RedDeadRedemtion">Red Dead Redemtion</Link></li>
        <li><Link to="Skyrim">Skyrim</Link></li>
        <li><Link to="TheLastOfUsPage">The Last of Us</Link></li>
        <li><Link to="TheWitcherPager">The Witcher 3</Link></li>
        <li><Link to="TombRaiderPage">Shadow of the Tomb Raider</Link></li>
        <li><Link to="UnchartedPage">Uncharted 4</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='CharacterPage' element={<CharacterPage/>}/>
      <Route path='ConsolePage' element={<ConsolePage/>}/>
      <Route path='AssassinsCreed' element={<AssassinsCreed/>}/>
      <Route path='PlagueTalePage' element={<PlagueTalePage/>}/>
      <Route path='RedDeadRedemtion' element={<RedDeadRedemtion/>}/>
      <Route path='Skyrim' element={<Skyrim/>} />
      <Route path='TheLastOfUsPage' element={<TheLastOfUsPage/>}/>
      <Route path='TheWitcherPager' element={<TheWitcherPage/>}/>
      <Route path='TombRaiderPage' element={<TombRaiderPage/>}/>
      <Route path='UnchartedPage' element={<UnchartedPage/>}/>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
    </>
  );
}

export default App;
