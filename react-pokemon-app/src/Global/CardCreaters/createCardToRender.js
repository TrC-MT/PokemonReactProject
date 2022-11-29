import React, {useContext} from 'react';
import {useGetPokiData} from './createCardDataObject';
import './cardstyles.css'
import { AppContext_CardDisplaying } from '../../AppContext';
export default function CreateCard(props){
    const onClick = null; //props.onClick
    const isSelected = props.selected;
    const pokemon_index = props.pokemonIndex ?? 1;
    const typeToDisplay = props.typeToDisplay;
    const { name = '', picture_url = '', type1 = '', type2 = ''} = useGetPokiData(pokemon_index);
    const isDisplay = typeToDisplay === null || typeToDisplay === type1 || typeToDisplay === type2;

    const {isCardDisplaying, setIsCardDisplaying} = useContext(AppContext_CardDisplaying)
    setIsCardDisplaying(isDisplay)

    return isDisplay ? (
        <div className={`card ${isSelected ? 'selected': ''}`} onClick={onClick}>
            <h2 className='cardName'>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
            <img className='cardImage' src={picture_url}></img>
            <div className="cardTypes">
                <span className='cardType'>{type1} {type2}</span>
            </div>
            <span>{pokemon_index}</span>
        </div>
    ) : null //Can change to something else
}
console.log(CreateCard)