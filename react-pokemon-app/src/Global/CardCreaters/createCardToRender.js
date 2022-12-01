import React from 'react';
import {useGetPokiData} from './createCardDataObject';
import './cardstyles.css'
export default function CreateCard(props){
    const onClick = props.onClick; //props.onClick
    const isSelected = props.selected;
    const pokemon_index = props.pokemonIndex ?? 1;
    const typeToDisplay = props.typeToDisplay;
    const { name = '', picture_url = '', type1 = '', type2 = ''} = useGetPokiData(pokemon_index);
    const isDisplay = typeToDisplay === null || typeToDisplay === type1 || typeToDisplay === type2;
    return isDisplay ? (
        <div className={`backgroundTest ${isSelected ? 'selected card': ''}`} onClick={onClick}>
            <h2 className={`cardNameHidden ${isSelected ? 'cardName': ''}`} >{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
            <img className={`cardImageHidden ${isSelected ? 'cardImage': ''}`} src={picture_url}></img>
            <div className={`cardTypesHidden ${isSelected ? 'cardTypes': ''}`}>
                <span className={`cardTypeHidden ${isSelected ? 'cardType': ''}`}>{type1} {type2}</span>
            </div>
        </div>
    ) : null //Can change to something else
}
console.log(CreateCard)