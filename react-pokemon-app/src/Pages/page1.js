import React, { useContext } from "react"
import PlayerAmountOptionComponent from "../Global/Components/Tcomponents/PlayerAmountOptions"
import PlayerNameComponents from "../Global/Components/Tcomponents/PlayerNameComponent";
import '../sections/hjake07/Jstyles.css'
export default function WelcomePage(){
    
    return(
        <div className="theContainer">
            <div className="box d-flex justify-content-center">
                {/* <Navbar></Navbar> */}
                <h1 className='title'>Pokemon Matching Game</h1>
                <h2 className='playerSelect'>Players</h2>
                <PlayerAmountOptionComponent></PlayerAmountOptionComponent>
                <PlayerNameComponents ></PlayerNameComponents>
                <h3 className="centered">Click Play to start.</h3>
            </div>
        </div>
    )
}

