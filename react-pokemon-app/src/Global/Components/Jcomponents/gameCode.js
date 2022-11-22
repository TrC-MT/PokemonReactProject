import { useEffect, useState, useContext } from 'react';
import HandleClick from '../../../sections/hjake07/Jsection';
import CreateCard from '../../CardCreaters/createCardToRender'
import Player1Score from './player1score'
import Player2Score from './player2score';
import Player3Score from './player3score';
import Player4Score from './player4score';
import {AppContext_Pokemon, AppContext_TypeSelected} from '../../../AppContext';

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}



export default function Jcode(){ //Remember to rename your section here

    const [displayArray, setDisplayArray] = useState([]);
    const [firstCardSelectedPosition, setFirstCardSelectedPosition ] = useState(null);
    const [secondCardSelectedPosition, setSecondCardSelectedPosition] = useState(null);
    const { pokemon } = useContext(AppContext_Pokemon);
    const {type_selected} = useContext(AppContext_TypeSelected)

    const resetSelectedPositions= () => {
      setFirstCardSelectedPosition(null);
      setSecondCardSelectedPosition(null);
    }

    const updateWhenMatchFound = () => {
      console.log('You found a match!')
      displayArray[firstCardSelectedPosition].isHidden = true;
      displayArray[secondCardSelectedPosition].isHidden = true;

      setDisplayArray([...displayArray]);
      resetSelectedPositions();

    }

    useEffect(() => {
      const firstCardPosition = displayArray[firstCardSelectedPosition]?.position
      const secondCardPosition = displayArray[secondCardSelectedPosition]?.position
      const firstCardIndex = displayArray[firstCardSelectedPosition]?.index;
      const secondCardIndex = displayArray[secondCardSelectedPosition]?.index;
      const isBothSelected = firstCardSelectedPosition !== null && 
      secondCardSelectedPosition !== null
      const isMatch =  isBothSelected && 
        firstCardIndex === secondCardIndex && firstCardPosition !== secondCardPosition;
      const isNotMatch = isBothSelected && !isMatch

      if(isMatch) {
       updateWhenMatchFound();
      } else if(isNotMatch) {
        console.log('Not a match!');
        resetSelectedPositions();
      }

    }, [firstCardSelectedPosition, secondCardSelectedPosition, displayArray]);

    useEffect(() => {
      let displayArray;
      const validPokemonIndexes = pokemon.filter(pokemonItem => {
        
        const type1 = pokemonItem?.types[0]?.type?.name ?? '';
        const type2 = pokemonItem?.types[1]?.type?.name ?? '';

        return type_selected === null || type_selected === type1 || type_selected === type2;
        
      }).map(({ index }) => index);
      // const length = Math.min(81, validPokemonIndexes.length)
      // const randomIndexes = new Array(20).fill(0).map((o, i) => validPokemonIndexes[Math.floor(Math.random() * length)])

      // const arrayWithUniqueTypes = [...new Set(randomIndexes)].slice(0, 12);
      // const displayArrayWithoutPosition = [
      //   ...arrayWithUniqueTypes,
      //   ...arrayWithUniqueTypes
      // ];

      // // shuffle
      // shuffleArray(displayArrayWithoutPosition);
      
      displayArray = validPokemonIndexes.map((index, position) => ({
        index, isHidden: false, position
      }))

      setDisplayArray(displayArray);
    }, []);

    const onClick = (pos) => {
      const firstCardIndex = displayArray[firstCardSelectedPosition]?.index;
      const secondCardIndex = displayArray[secondCardSelectedPosition]?.index;
      const isSetFirstCard = isNaN(firstCardIndex);
      const isSetSecondCard = !isSetFirstCard && isNaN(secondCardIndex);

      if(isSetFirstCard) {
        setFirstCardSelectedPosition(pos); 
      } else if(isSetSecondCard) {
        setSecondCardSelectedPosition(pos);
      }
    };


    
    return(
            <div className='mySection' id="myTableSection">
                <div className='container'>
                      {displayArray.map(({ index, isHidden, position }) => !isHidden ? (
                        <div className="cards" >
                          <CreateCard
                            onClick={() => onClick(position)}
                            key={position}
                            pokemonIndex={index}
                            typeToDisplay={type_selected}
                            selected={position === firstCardSelectedPosition || position === secondCardSelectedPosition} 
                          />
                        </div> 
                   ) : null )}
                 
                        </div>
                <Player1Score />
                <Player2Score />
                <Player3Score />
                <Player4Score />
                
            </div>
        
    ) 
        }