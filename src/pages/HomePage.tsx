import {Link} from 'react-router-dom'

const HomePage = () => {
    return(
      <> 
        <section>
            <h1>Assasins Creed</h1>
            <Link to="AssassinsCreed">Read more</Link>
        </section>
        <hr />
        <section> 
            <h1>A Plagues Tale</h1>
            <Link to="PlagueTalePage">Read more</Link>
        </section>
        <hr />
        <section>
            <h1>Red Dead Redemption 2</h1>
            <Link to="RedDeadRedemtion">Read more</Link>  
        </section>
        <hr />
        <section>
            <h1>Skyrim</h1>
            <Link to="Skyrim">Read more</Link>
        </section>
        <hr />
        <section>
            <h1>The Last of Us</h1>
            <Link to="TheLastOfUsPage">Read more</Link>
        </section>
        <hr />
        <section>
            <h1>The Witcher</h1>
            <Link to="TheWitcherPager">Read more</Link>
        </section>
        <hr />
        <section>
            <h1>Shadow of the Tomb Raider</h1>
            <Link to="TombRaiderPage">Read more</Link>
        </section>
        <hr />
        <section>
            <h1>Uncharted 4</h1>
            <Link to="UnchartedPage">Read more</Link>
        </section>
      </>
    )
}

export default HomePage