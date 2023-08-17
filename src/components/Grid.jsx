import "./Grid.css";
import Cards from "./Cards";
import { useState } from "react";
import isWinner from "../helpers/CheckWinner";

function Grid({ numberOfCards }) {
  const [boards, setBoards] = useState(Array(numberOfCards).fill(""));
  const [turn, setTurn] = useState(true);
  const [winner, setWinner] = useState(null);
// here is the the function for tie feature
  function checkDraw (){
    boards.every(square=>square !==null)
}

  function play(index) {
    if (turn == true) {
      boards[index] = "O";
    } else {
      boards[index] = "X";
    }

    
    const win = isWinner(boards, turn ? "O" : "X");
    if (win) {
      setWinner(win);
    } 
    // i m adding this condition for tie but it is not working.
    if (winner==true){
        setWinner(win)
    }else if(checkDraw()){
        reset()
    }
    // end condition 
    setBoards([...boards]);
    setTurn(!turn);
  }
  function reset(){
    setBoards(Array(numberOfCards).fill(""));
    setTurn(true)
    setWinner(null)
  }
 
  return (
    <div className="grid-wrapper">
      {winner && (
        <>
          <h1 className="turn-highlight">The Winner is : {winner}</h1>
          <button className="btn" onClick={reset}>Reset</button>
        </>
      )}
      <h1 className="turn-highlight">Current Turn : {turn ? "O" : "X"}</h1>
      <div className="grid">
        {boards.map((el, idx) => (
          <Cards key={idx}  endGame = {winner?true:false} onPlay={play} player={el} index={idx} />
        ))}
      </div>
    </div>
  );
}

export default Grid;
