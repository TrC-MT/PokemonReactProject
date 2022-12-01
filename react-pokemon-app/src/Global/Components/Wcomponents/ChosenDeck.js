import React, {useContext, useEffect, useState} from 'react';
import { AppContext_AmountPlayers, AppContext_TypeSelected } from '../../../AppContext';

export default function DeckOption(){
    const {players_count} = useContext(AppContext_AmountPlayers)
    const {type_selected, setTypeSelected} = useContext(AppContext_TypeSelected)

    if(players_count == 1 || players_count == 2){
        return(
            <div>
            <div className='chosenDeck'>
                <label>Choose a deck: </label>
                <select name='decks' id='decks' onChange={(e) => {setTypeSelected(e.target.value)}} value={type_selected}>
                    <option value=''>All</option>
                    <option value='poison'>Poison</option>
                    <option value='flying'>Flying</option>
                    <option value='water'>Water</option>
                    <option value='normal'>Normal</option>
                    <option value='grass'>Grass</option>
                    <option value='fire'>Fire</option>
                    <option value='bug'>Bug</option>
                    <option value='electric'>Electric</option>
                    <option value='ground'>Ground</option>
                    <option value='psychic'>Psychic</option>
                    <option value='fairy'>Fairy</option>
                    <option value='fighting'>Fighting</option>
                </select>
            </div>
        </div>
        )
    } else if(players_count == 3){
        return(
            <div>
            <div className='chosenDeck'>
                <label>Choose a deck: </label>
                <select name='decks' id='decks' onChange={(e) => {setTypeSelected(e.target.value)}} value={type_selected}>
                    <option value=''>All</option>
                    <option value='poison'>Poison</option>
                    <option value='flying'>Flying</option>
                    <option value='water'>Water</option>
                    <option value='normal'>Normal</option>
                    <option value='grass'>Grass</option>
                    <option value='fire'>Fire</option>
                    <option value='bug'>Bug</option>
                    <option value='electric'>Electric</option>
                    <option value='ground'>Ground</option>
                    <option value='psychic'>Psychic</option>
                </select>
            </div>
        </div>
        )
        
    } else if(players_count == 4){
        return(
            <div>
            <div className='chosenDeck'>
                <label>Choose a deck: </label>
                <select name='decks' id='decks' onChange={(e) => {setTypeSelected(e.target.value)}} value={type_selected}>
                    <option value=''>All</option>
                    <option value='poison'>Poison</option>
                    <option value='flying'>Flying</option>
                    <option value='water'>Water</option>
                    <option value='normal'>Normal</option>
                </select>
            </div>
        </div>
        )
    } else{
        return(
            <span>Choose an amount of player on the home page.</span>
        )
    }

}
