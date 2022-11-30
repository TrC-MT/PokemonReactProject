import {score} from './gameCode'
export default function Player1Score(props){
    let active = props.active
    let scoreForPlayer1 = score;
    return(
        <div className="player1Scores playerActive">
            Player1: {scoreForPlayer1} Match(es)
        </div>
    )
}