import { AppContext_AmountPlayers, AppContext_PlayersNames } from '../../../AppContext';
import { useContext } from 'react';

export default function PlayerNameComponents(){
    const {players_count} = useContext(AppContext_AmountPlayers)
    let {players} = useContext(AppContext_PlayersNames)
    
    return(
        <div style={{display : 'flex', justifyContent : 'space-around'}}>

        {Object.keys(players).map((playerId) =>(
            <PlayerNameComponent player={players[playerId]} key={playerId}></PlayerNameComponent>
        ) )}
        </div>
    )
}

export function PlayerNameComponent({player}){
    const {setPlayers} = useContext(AppContext_PlayersNames)
    function setPlayerName(name, id){
        setPlayers((players) => {
            players['player'+id].name = name;
            return {...players}
        })
    }

    return(
        <input type="text" onChange={(e) => setPlayerName(e.target.value, player.id)} id={`player-${player.id}-nameInput`} placeholder={`Player-${player.id}-name`} className='nameInput w-25 form-control' />
    )
}

/*
players {
    player1: {
        name: value,
        score: value,
        id: 1
    },
    player2: {
        name: value,
        score: value,
        id: 2
    },
    player3: {
        name: value,
        score: value,
        id: 3
    },
    player4: {
        name: value,
        score: value,
        id: 4
    },
}

*/