import { createContext } from "react";

export const AppContext_AmountPlayers = createContext({
    players_count: 0,
    setPlayersCount: () => {}
}
)


export const AppContext_TypeSelected = createContext({
    type_selected: null,
     setTypeSelected: () => {}
})

export const AppContext_CardDisplaying = createContext({
    isCardDisplaying: null,
    setIsCardDisplaying: () => {}
})

export const AppContext_PlayersNames = createContext({
    player1name: '',
    player2name: '',
    player3name: '',
    player4name: '',
    setplayer1name: () => {},
    setplayer2name: () => {},
    setplayer3name: () => {},
    setplayer4name: () => {}

})