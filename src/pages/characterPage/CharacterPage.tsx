import CharacterList from "../../components/characters/CharacterList"
import './CharacterPage.css'
import "../shared/Pages.css"

const CharacterPage = () => {
    return(
        <div className="background-clr">
            <section className="page-header character-header-img"></section>
            <section className="container grid-container background-clr">
                <CharacterList/>
            </section>
        </div>
    )
}

export default CharacterPage