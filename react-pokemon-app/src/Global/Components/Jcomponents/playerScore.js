import { useContext } from 'react';
import { AppContext_PlayersNames } from '../../../AppContext';

export default function PlayerScore({player}){
    var score = 2;
    var isPlural = ''
    if(score > 1){
        isPlural = 'Matches'
    }
    else if(score <= 0){
        isPlural = ''
    }
    else if(score == 1){
        isPlural = 'Match'
    }
    else{
        isPlural = 'Not A Number.'
    }
    return(
        <div className={`player${player.id}Scores`}>
            {player.name}: {score} {isPlural}
        </div>
    )
}