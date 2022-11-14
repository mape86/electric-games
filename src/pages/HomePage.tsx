import {Link} from 'react-router-dom'

const HomePage = () => {
    return(
      <> 
        <section>
            <Link to="AssassinsCreed">Assasins Creed</Link>
        </section>
        <section> 
            <Link to="PlagueTalePage">Plague Tale</Link>
        </section>
        <section>
            <Link to="RedDeadRedemtion">Red Dead Redemtion</Link>  
        </section>
        <section>
            <Link to="Skyrim">Skyrim</Link>
        </section>
        <section>
            <Link to="TheLastOfUsPage">The Last of Us</Link>
        </section>
        <section>
            <Link to="TheWitcherPager">The Witcher 3</Link>
        </section>
        <section>
            <Link to="TombRaiderPage">Shadow of the Tomb Raider</Link>
        </section>
        <section>
            <Link to="UnchartedPage">Uncharted 4</Link>
        </section>
      </>
    )
}

export default HomePage