import React, { useContext } from "react"
import PlayerAmountOptionComponent from "../Global/Components/Tcomponents/PlayerAmountOptions"
import PlayerNameComponents from "../Global/Components/Tcomponents/PlayerNameComponent";
import '../sections/hjake07/Jstyles.css'
import Pages from "./Pages";
export default function WelcomePage(){
    
    return(
        <div className="theContainer">
            <div className="box d-flex justify-content-center">
                {/* <Navbar></Navbar> */}
                <h1 className='title'>Pokemon Matching Game</h1>
                <h2 className='playerSelect'>Players</h2>
                <PlayerAmountOptionComponent></PlayerAmountOptionComponent>
                <PlayerNameComponents ></PlayerNameComponents>
                <a href='/game'><button className='btn btn-primary w-25 mx-auto'>Start Playing!</button></a>
            </div>
        </div>
    )
}

