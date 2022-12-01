import { useContext } from 'react';
import { AppContext_PlayersNames } from '../../../AppContext';

export default function PlayerScore(props){
    var isPlural = ''
    var score = props.player.score
    var isActive = props.active_player == props.player.id
    if(score > 1){
        isPlural = 'Matches'
    }
    else if(score <= 0){
        isPlural = 'Matches'
    }
    else if(score == 1){
        isPlural = 'Match'
    }
    else{
        isPlural = 'Not A Number.'
    }
    return(
        <div className={`player${props.player.id}Scores  ${isActive ? 'ActivePlayer': ''}`}>
            {props.player.name}: {score} {isPlural}
        </div>
    )
}