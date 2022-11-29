import React, {useEffect, useState} from 'react';
import '../Walls101/Wstyles.css'
import '../hjake07/Jstyles.css'
import All from '../hjake07/Jsection';
import DeckOption from '../../Global/Components/Wcomponents/ChosenDeck'

export default function DeckSelection(){
    return(
        <div className='pageThree'>
            <DeckOption></DeckOption>
            <br></br>
            <br></br>
            <All />
        </div>
        
    )
}
