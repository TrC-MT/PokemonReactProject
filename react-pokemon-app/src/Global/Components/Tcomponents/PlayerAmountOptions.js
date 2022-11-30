import React from "react";
import { useState, useEffect,  useReducer, createContext, useContext} from "react";
import { AppContext_AmountPlayers, AppContext_PlayersNames } from "../../../AppContext";


export default function PlayerAmountOptionComponent(){
    const {players_count, setPlayersCount} = useContext(AppContext_AmountPlayers)
    let {players} = useContext(AppContext_PlayersNames)
        if(players.length >= players_count){
            players = {}
        }
        for(let i = 0; i < players_count; i++){
            players[i] =
                `player${i+1} : {
                    name: '',
                    score: 0,
                    id: ${i+1}
                }, `;
        }
    return(
        <select onChange={(e) => {setPlayersCount(Number(e.target.value))}} value={players_count} className='w-25 form-select form-select-lg mt-3 mb-3 mx-auto' id="playerSelect">
            <option value='1'>1 player</option>
            <option value='2'>2 players</option>
            <option value='3'>3 players</option>
            <option value='4'>4 players</option>
        </select>
    )
}