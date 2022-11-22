import GameConsoleList from '../../components/consoles/GameConsoleList'
import '../consolePage/ConsolePage.css'

const ConsolePage = () => {
    return(
        <>
        <section className="console-header-img page-header"></section>
        <section className="container grid-container">
            <GameConsoleList/>
        </section>
        </>
    )
}

export default ConsolePage