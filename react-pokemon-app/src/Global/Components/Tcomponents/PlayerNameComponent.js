import { AppContext_AmountPlayers, AppContext_PlayersNames } from '../../../AppContext';
import { useContext } from 'react';

export default function PlayerNameComponents(){
    const {players_count} = useContext(AppContext_AmountPlayers)
    return(
        <div style={{display : 'flex', justifyContent : 'space-around'}}>
        {new Array(players_count).fill(1).map((one, index) =>(
            <PlayerNameComponent playerIndex={one + index}></PlayerNameComponent>
        ) )}
        </div>
    )
    
}

export function PlayerNameComponent(props){
    
    function setplayername(name, playerIndex){
        const [player1name, player2name, player3name, player4name, setplayer1name, setplayer2name, setplayer3name, setplayer4name] = useContext(AppContext_PlayersNames)

        if(playerIndex == 1){
            player1name = setplayer1name(name)
        }
        else if(playerIndex == 2){
            player2name = setplayer2name(name)
        }
        else if(playerIndex == 3){
            player3name = setplayer3name(name)
        }
        else if(playerIndex == 4){
            player4name = setplayer4name(name)
        }
    }

    return(
        <input type="text" onChange={(e) => setplayername(e.target.value, props.playerIndex)} id={'player' + props.playerIndex + 'nameInput'} placeholder={'Player' + props.playerIndex + 'name'} className='nameInput w-25 form-control' />
    )
}