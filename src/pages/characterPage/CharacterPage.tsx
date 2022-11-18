import CharacterList from "../../components/characters/CharacterList"
import './CharacterPage.css'
import "../shared/Pages.css"

const CharacterPage = () => {
    return(
        <>
            <section className="page-header character-header-img"></section>
            <section className="container grid-container">
                <CharacterList/>
            </section>
        </>
    )
}

export default CharacterPage