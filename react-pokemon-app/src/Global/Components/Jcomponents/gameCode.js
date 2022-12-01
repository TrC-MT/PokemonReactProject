import { useEffect, useState, useContext } from 'react';
import CreateCard from '../../CardCreaters/createCardToRender'
import PlayerScore from '../Tcomponents/playerScore';
import { BlankCard } from '../../../sections/hjake07/Jsection';

import { AppContext_AmountPlayers, AppContext_CardDisplaying, AppContext_TypeSelected, AppContext_PlayersNames } from '../../../AppContext';

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}
let active_player = 1;
let rounds = 18;
export default function Jcode(){ //Remember to rename your section here
  const {players_count} = useContext(AppContext_AmountPlayers)
  const {players} = useContext(AppContext_PlayersNames)
  // const fireArray = [4,5,6,37,38,58,59,77,78,126,136,146]
  // const waterArray = [7,8,9,54,55,60,61,62,72,73,79,80,86,87,90,91,98,99,116,117,118,119,120,121,129,130,131,134,138,139,140,141]
  // const grassArray = [1,2,3,43,44,45,46,47,69,70,71,102,103,114]
  // const psycicArray = [63,64,65,79,80,96,102,103,122,124,150,151]
  // const flyingArray = [6,12,16,17,18,21,22,41,42,83,84,85,123,130,142,144,145,146,149]
  // const normalArray = [16,17,18,19,20,21,22,39,40,52,53,83,84,85,108,113,115,128,132,133,137,143]
  // const poisonArray = [1,2,3,13,14,15,23,24,29,30,31,32,33,34,41,42,43,44,45,48,49,69,70,71,72,73,88,89,92,93,94,109,110]
  // const groundArray = [27,28,31,34,50,51,74,75,76,95,104,105,111,112] 
  // const bugArray = [10,11,12,13,14,13,46,47,48,49,123,127] 
  // const fairyArray = [35,36,38,39,40,122]
  // const fightingArray = [56,57,66,67,68,106,107]
  // const electricArray = [25,26,74,75,76,81,82,100,101,125,135,145 ] 
  // const {type_selected} = useContext(AppContext_TypeSelected)
  // const {isCardDisplaying} = useContext(AppContext_CardDisplaying)

  useEffect(() => {
    active_player = 1

    }, [players_count])


    let [displayArray, setDisplayArray] = useState([]);
    const [firstCardSelectedPosition, setFirstCardSelectedPosition ] = useState(null);
    const [secondCardSelectedPosition, setSecondCardSelectedPosition] = useState(null);

    const resetSelectedPositions= () => {
      setTimeout(() => {
      setFirstCardSelectedPosition(null);
      setSecondCardSelectedPosition(null);
      }, 900)
    }
    const updateWhenMatchFound = () => {
     
      displayArray[firstCardSelectedPosition].isHidden = true;
      displayArray[secondCardSelectedPosition].isHidden = true;
      setDisplayArray([...displayArray]);
      resetSelectedPositions();

      
    }
    const {setPlayers} = useContext(AppContext_PlayersNames)
      function setPlayerScore(score, id){
        setPlayers((players) => {
            players['player'+id].score = score;
            return {...players}
        })}
    useEffect(() => {

      if(rounds == 0){
        alert('Game Over.')
      }

      const firstCardPosition = displayArray[firstCardSelectedPosition]?.position
      const secondCardPosition = displayArray[secondCardSelectedPosition]?.position
      const firstCardIndex = displayArray[firstCardSelectedPosition]?.index;
      const secondCardIndex = displayArray[secondCardSelectedPosition]?.index;
      let isBothSelected = firstCardSelectedPosition !== null && 
      secondCardSelectedPosition !== null
      const isMatch =  isBothSelected && firstCardIndex === secondCardIndex && firstCardPosition !== secondCardPosition;
      const isNotMatch = isBothSelected && !isMatch

      if(isMatch) {
        let score = players['player'+active_player].score
        score += 1
        players['player'+active_player].score = score;
        setPlayerScore(score, active_player)
        if(active_player < players_count){
          active_player += 1
        }
        else{
          active_player = 1
        }

        if(players_count == 1){
          rounds -= 1
        }

       updateWhenMatchFound();
      } else if(isNotMatch) {
      if(active_player < players_count){
        active_player += 1
      }
      else{
        active_player = 1
      }

      if(players_count == 1){
        rounds -= 1
      }
        
        resetSelectedPositions();
      }

    }, [firstCardSelectedPosition, secondCardSelectedPosition]);
    let randomArray = []
    useEffect(() => {
      let displayArray;
      const defaultArray = Array.from({length: 151}, (_, i) => i + 1)
      
          for(let j = 0; j < 151; j++){
            const randomNumber = Math.floor(Math.random() * 151)
            randomArray.push(defaultArray[randomNumber])
          }
      const arrayWithUniqueTypes24 = [...new Set(randomArray)].slice(0, 12);
      // const arrayWithUniqueTypes12 = [...new Set(randomArray)].slice(0, 6)
      const displayArrayWithoutPosition24 = [
        ...arrayWithUniqueTypes24,
        ...arrayWithUniqueTypes24
      ];
      // const displayArrayWithoutPosition12 = [
      //   ...arrayWithUniqueTypes12,
      //   ...arrayWithUniqueTypes12
      // ]

      // shuffle
      shuffleArray(displayArrayWithoutPosition24); //change to 24 for full size game
      
      displayArray = displayArrayWithoutPosition24.map((index, position) => ({ //change to 24 for full size game
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
            {displayArray.map(({ index, isHidden, position }) => !isHidden?  (
                  <>
                      <CreateCard
                      onClick={() => onClick(position)}
                      key={position}
                      pokemonIndex={index + 1}
                      typeToDisplay={null}
                      selected={position === firstCardSelectedPosition || position === secondCardSelectedPosition} 
                    /> 
                  </> 
              ) : <BlankCard></BlankCard> )}
            
            </div>
                  {Object.keys(players).map(player => 
                    <PlayerScore player={players[player]} active_player={active_player}/>
                  )}
            {players_count == 1 ? <p className='player2Scores'>Rounds left: {rounds}</p> : ''}
            
            
        </div>
    )
    

    }
