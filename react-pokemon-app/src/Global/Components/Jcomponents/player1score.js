import { useContext } from 'react';
import { AppContext_PlayersNames } from '../../../AppContext';

export default function Player1Score(props){
    const [player1name] = useContext(AppContext_PlayersNames)
    return(
        <div className="player1Scores">
            {player1name}: 2 Matches
        </div>
    )
}