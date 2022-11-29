import { useContext } from 'react';
import { AppContext_PlayersNames } from '../../../AppContext';

export default function Player4Score(props){
    // const [player4name] = useContext(AppContext_PlayersNames)
    return(
        <div className="player4Scores">
            {props.player4name}: 2 Matches
        </div>
    )
}