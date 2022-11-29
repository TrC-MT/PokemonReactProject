import CreateCard from "../../Global/CardCreaters/createCardToRender";
import { useContext } from "react";
import { AppContext_CardDisplaying, AppContext_TypeSelected } from "../../AppContext";
export default function All(){
const allArray = Array.from({length: 151}, (_, i) => i + 1)
console.log(allArray)
const waterArray = []
const {isCardDisplaying} = useContext(AppContext_CardDisplaying)
const {type_selected} = useContext(AppContext_TypeSelected)
return(
    
    <div className="p3container">
{allArray.map((index) => (
    
    
    
        <><CreateCard pokemonIndex={index} typeToDisplay={type_selected} /></>
   
))
}
   

</div>
)}
