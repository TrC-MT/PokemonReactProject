import React, {useEffect, useState} from 'react';

export default function DeckOption(){

    return(
        <div class='choosingDeck'>
            <div className='chosenDeck'>
                <label>Choose a deck: </label>
                <select name='decks' id='decks'>
                    <optgroup label='4 Players minimum'>
                        <option value='default'>Default</option>
                        <option value='poison'>Poison</option>
                        <option value='flying'>Flying</option>
                        <option value='water'>Water</option>
                        <option value='normal'>Normal</option>
                    </optgroup>
                    <optgroup label='3 Players minimum'>
                        <option value='grass'>Grass</option>
                        <option value='fire'>Fire</option>
                        <option value='bug'>Bug</option>
                        <option value='electric'>Electric</option>
                        <option value='ground'>Ground</option>
                        <option value='psychic'>Psychic</option>
                    </optgroup>
                    <optgroup label='2 Players minimum'>
                        <option value='fairy'>Fairy</option>
                        <option value='fighting'>Fighting</option>
                    </optgroup>
                </select>
            </div>
        </div>
    )
}
