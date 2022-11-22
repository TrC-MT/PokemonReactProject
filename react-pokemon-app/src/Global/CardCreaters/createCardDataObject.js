import React, {useState, useEffect, useContext} from 'react'
import { AppContext_Pokemon } from '../../AppContext';
import useFetchData from '../APIdata/useFetchData';
/*
    Get a paramemter_number from the section(s)
    That number will be the pokemon the section(s) want to create
*/
//===========================================

function useFetchItemData(pokemon_index){
    const { pokemon } = useContext(AppContext_Pokemon)
    const data = pokemon[pokemon_index - 1];
    let picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon_index}.png`
    return({data, pokemon_index, picture})
}


//--------------------------------------------------

async function GetTypeData(pokemon_index){

    const { pokemon } = useContext(AppContext_Pokemon)
    return pokemon[pokemon_index - 1];
}
function useTypeFetchData(pokemon_index) {

    const [type_data, setTypeData] = useState(null)

    useEffect(() => {
        GetTypeData(pokemon_index).then(newTypeData => {
            setTypeData(newTypeData)
        })
    }, [])

    return type_data;
}


//-------------------------------------


export function useGetPokiData(pokemon_index){

    const itemdata = useFetchItemData(pokemon_index);
    const type_data = useTypeFetchData(pokemon_index);
    
    const pokemon_data  = {
        pokemon_index: itemdata.pokemon_index,
        name: itemdata?.data?.results?.[pokemon_index-1]?.name ?? '',
        picture_url: itemdata?.picture ?? '',
        type1: type_data?.types?.[0]?.type?.name ?? '',
        type2: type_data?.types?.[1]?.type?.name ?? ''
    }
    return(pokemon_data)
}


//===================================
/*
    Send the pokemon_data to the createCardToRender.js
    That file can now create a card for the pokemon
*/
