import { AppContext_AmountPlayers } from '../../../AppContext';
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

    return(
        <input type="text" id={'player' + props.playerIndex + 'nameInput'} placeholder={'Player' + props.playerIndex + 'name'} className='nameInput w-25 form-control' />
    )
}