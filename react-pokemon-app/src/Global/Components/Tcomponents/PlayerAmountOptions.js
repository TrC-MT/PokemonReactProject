import React from "react";
import { useState, useEffect,  useReducer, createContext, useContext} from "react";
import { AppContext_AmountPlayers } from "../../../AppContext";


export default function PlayerAmountOptionComponent(){
    const {players_count, setPlayersCount} = useContext(AppContext_AmountPlayers)
    return(
        <select onChange={(e) => {setPlayersCount(Number(e.target.value))}} value={players_count} className='w-25 form-select form-select-lg mt-3 mb-3 mx-auto' id="playerSelect">
            <option value='1'>1 player</option>
            <option value='2'>2 players</option>
            <option value='3'>3 players</option>
            <option value='4'>4 players</option>
        </select>
    )
}