import React, {useEffect, useState} from 'react';
import '../Walls101/Wstyles.css'
import '../hjake07/Jstyles.css'
import '../../Global/CardCreaters/cardstyles.css'
import All from '../hjake07/Jsection';

import DeckOption from '../../Global/Components/Wcomponents/ChosenDeck'

export default function DeckSelection(){

    return(
        <div className='pageThree'>
            <DeckOption></DeckOption>
            <br></br>
            <br></br>
            <All></All>
            {/* <div class='maincontainer'>
                <div class='card' id='card'>
                    <div class='front'>
                        <p>Da Front</p>
                    </div>
                    <div class='back'>
                        <p>Da Back</p>
                    </div>
                </div>
            </div> */}
        </div>
        
    )
}

// const card = document.getElementById("card");
// card.addEventListener('click',flipCard);

// function flipCard() {
//     flipCard.classList.toggle("flipCard");
// }