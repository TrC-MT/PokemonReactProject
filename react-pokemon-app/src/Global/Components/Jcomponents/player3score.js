import { useContext } from 'react';
import { AppContext_PlayersNames } from '../../../AppContext';

export default function Player3Score(props){
    // const [player3name] = useContext(AppContext_PlayersNames)
    return(
        <div className="player3Scores">
            {props.Name}: 2 Matches
        </div>
    )
}