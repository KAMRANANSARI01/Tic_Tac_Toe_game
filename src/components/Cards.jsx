import Icon from "./Icons";
import "./Cards.css";

function Cards ({ endGame,player,onPlay,index}){
    let icon = <Icon/>
    if(player==="X"){
    icon = <Icon name="cross"/>
    }else if (player==="O"){
        icon = <Icon name="circle"/>
    }
    return(
        <div className="cards"  onClick={()=> !endGame && player=="" && onPlay(index)}>
            {icon}
        </div>
    )
}

export default Cards;