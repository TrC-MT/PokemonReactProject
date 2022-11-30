import { useContext } from 'react';
import { AppContext_PlayersNames } from '../../../AppContext';

export default function PlayerScore({player}){
    var score = '2';
    return(
        <div className={`player${player.id}Scores`}>
            {player.name}: {score} Matches
        </div>
    )
}