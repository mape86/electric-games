import CharacterList from "../../components/characters/CharacterList"
import './CharacterPage.css'

const CharacterPage = () => {
    return(
        <>
            <section className="character-top-section"></section>
            <section className="container character-container">
                <CharacterList/>
            </section>
        </>
    )
}

export default CharacterPage