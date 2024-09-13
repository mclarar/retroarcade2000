import { useState } from "react";
import {Board}from "./Board/Board";
import {Info} from "./Info/Info";

export function TicTacToe() {
  const [reset, setReset] = useState<boolean>(false);
  const [winner, setWinner] = useState<string>("");

  const resetBoard = () => {
    setReset(true);
  };

  return (
    <div className="App">
      <div className={`winner ${winner !== "" ? "" : "shrink"}`}>
        <div className="winner-text">{winner}</div>

        <button onClick={resetBoard}>Reset Board</button>
      </div>

      <Board
        reset={reset}
        setReset={setReset}
        winner={winner}
        setWinner={setWinner}
      />
      <Info />
    </div>
  );
}
