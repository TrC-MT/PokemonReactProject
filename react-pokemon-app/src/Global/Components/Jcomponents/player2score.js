import { useContext } from 'react';
import { AppContext_PlayersNames } from '../../../AppContext';

export default function Player2Score(props){
    // const [player2name] = useContext(AppContext_PlayersNames)
    return(
        <div className="player2Scores">
            {props.Name}: 2 Matches
        </div>
    )
}