import React from 'react';
// import {useGetPokiData} from './createCardDataObject';
import { useGetPokiData } from '../../CardCreaters/createCardDataObject';
// import './cardstyles.css'
import '../../CardCreaters/cardstyles.css';
export default function ShowCards(props){
    const onClick = props.onClick;
    const isSelected = props.selected;
    const pokemon_index = props.pokemonIndex ?? 1;
    const typeToDisplay = props.typeToDisplay;
    const { name = '', picture_url = '', type1 = '', type2 = ''} = useGetPokiData(pokemon_index);
    const isDisplay = typeToDisplay === null || typeToDisplay === type1 || typeToDisplay === type2;
    return isDisplay ? (
        <div className={`card`}>
            <h2 className={`cardName`} >{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
            <img className={`cardImage}`} src={picture_url}></img>
            <div className={`cardTypesHidden ${isSelected ? 'cardTypes': ''}`}>
                <span className={`cardTypeHidden ${isSelected ? 'cardType': ''}`}>{type1} {type2}</span>
            </div>
        </div>
    ) : null //Can change to something else
}