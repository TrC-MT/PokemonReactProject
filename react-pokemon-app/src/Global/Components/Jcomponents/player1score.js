import { useContext } from 'react';
import { AppContext_PlayersNames } from '../../../AppContext';

export default function Player1Score(props){
    return(
        <div className="player1Scores">
            {props.Name}: 2 Matches
        </div>
    )
}