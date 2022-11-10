
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {HomePage, CharacterPage, ConsolePage, PlagueTalePage, TheLastOfUsPage, TheWitcherPage, TombRaiderPage, UnchartedPage} from './pages/index'

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
        <li><Link to="CharacterPage">Characters</Link></li>
        <li><Link to="ConsolePage">Consoles</Link></li>
        <li><Link to="PlagueTalePage">Plague Tale</Link></li>
        <li><Link to="TheLastOfUsPage">The Last of Us</Link></li>
        <li><Link to="TheWitcherPager">The Witcher 3</Link></li>
        <li><Link to="TombRaiderPage">Shadow of the Tomb Raider</Link></li>
        <li><Link to="UnchartedPage">Uncharted 4</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='CharacterPage' element={<CharacterPage/>}></Route>
      <Route path='ConsolePage' element={<ConsolePage/>}></Route>
      <Route path='PlagueTalePage' element={<PlagueTalePage/>}></Route>
      <Route path='TheLastOfUsPage' element={<TheLastOfUsPage/>}></Route>
      <Route path='TheWitcherPager' element={<TheWitcherPage/>}></Route>
      <Route path='TombRaiderPage' element={<TombRaiderPage/>}></Route>
      <Route path='UnchartedPage' element={<UnchartedPage/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
