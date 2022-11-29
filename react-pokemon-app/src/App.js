import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
//-------------------------------------
import 'bootstrap/dist/css/bootstrap.css'
import Tcode from './sections/TrC-Mt/Tsection';
import Jcode from './Global/Components/Jcomponents/gameCode'
import Wcode from './sections/Walls101/Wsection';
import './sections/hjake07/Jstyles.css'
import PAGES from './Pages/Pages'
import { useState } from 'react';
import { AppContext_AmountPlayers, AppContext_TypeSelected, AppContext_CardDisplaying } from './AppContext';

export default function App(){
    const [players_count, setPlayersCount] = useState(1)
    const [type_selected, setTypeSelected] = useState(null)
    const [isCardDisplaying, setIsCardDisplaying] = useState(null)

    return(
        <AppContext_AmountPlayers.Provider value={{players_count, setPlayersCount}}>
        <AppContext_TypeSelected.Provider value={{type_selected, setTypeSelected}}>
        <AppContext_CardDisplaying.Provider value={{isCardDisplaying, setIsCardDisplaying}}>
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<PAGES.Page1 />} />
                    <Route path="/game" element={<PAGES.Page2 />} />
                    <Route path="/choose-type" element={<PAGES.Page3 />} />
                    <Route path="/hidden-tests" element={<TestPage/>} />
                    <Route path="*" element={<ErrorPage/>} />
                </Routes>
            </Router>
        </AppContext_CardDisplaying.Provider>
        </AppContext_TypeSelected.Provider>
        </AppContext_AmountPlayers.Provider>
        
    )
}

function TestPage(){
    return (
        <>
            <Tcode></Tcode>
            <h1>SEPARATION    - T^ Jv</h1>
            <Jcode></Jcode>
            <h1>SEPARATION -   J^ Wv </h1>
            <Wcode></Wcode>
        </>
    )
}
function ErrorPage(){
    return(
        <>
            <h1>Error: 404 page not found</h1>
            <Link to="/">Home</Link>
        </>
    )
}
function Navbar(){
    return(
        <>
            <nav>
                <h1 className='navTitle'>Pokemon Matching Game</h1>
                <div className='linksDiv'>
                <Link to='/' className="links">Home</Link>
                <Link to='/game' className="links">Play</Link>
                <Link to='/choose-type' className="links">Explore</Link>
                </div>
            </nav>
        </>
    )
}