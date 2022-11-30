import { useContext } from 'react';
import { AppContext_PlayersNames } from '../../../AppContext';

export default function PlayerScore(props){
    var score = '2';
    return(
        <div className="playerScores">
            {props.Name}: {score} Matches
        </div>
    )
}