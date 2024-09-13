import "./Board.module.scss";
import { useState, useEffect, useRef, MouseEvent } from "react";

interface BoardProps {
  reset: boolean;
  setReset: (reset: boolean) => void;
  winner: string;
  setWinner: (winner: string) => void;
}

export function Board({ reset, setReset, winner, setWinner }:BoardProps ) {
  const [turn, setTurn] = useState<number>(0);
  const [data, setData] = useState<string[]>([
    "", "", "", "", "", "", "", "", ""
  ]);

  const boardRef = useRef<HTMLDivElement>(null);

  const draw = (event: MouseEvent<HTMLDivElement>, index: number) => {
    if (data[index - 1] === "" && winner === "") {
      const current = turn === 0 ? "X" : "O";
      const newData = [...data];
      newData[index - 1] = current;
      setData(newData);

      event.currentTarget.innerText = current;
      setTurn(turn === 0 ? 1 : 0);
    }
  };

  useEffect(() => {
    setData(["", "", "", "", "", "", "", "", ""]);

    if (boardRef.current) {
      const cells = boardRef.current.children;
      for (let i = 0; i < 9; i++) {
        cells[i].innerHTML = "";
      }
    }

    setTurn(0);
    setWinner("");
    setReset(false);
  }, [reset, setReset, setWinner]);

  useEffect(() => {
    const checkRow = (): boolean => {
      let ans = false;
      for (let i = 0; i < 9; i += 3) {
        ans ||= data[i] === data[i + 1] && data[i] === data[i + 2] && data[i] !== "";
      }
      return ans;
    };

    const checkCol = (): boolean => {
      let ans = false;
      for (let i = 0; i < 3; i++) {
        ans ||= data[i] === data[i + 3] && data[i] === data[i + 6] && data[i] !== "";
      }
      return ans;
    };

    const checkDiagonal = (): boolean => {
      return (
        (data[0] === data[4] && data[0] === data[8] && data[0] !== "") ||
        (data[2] === data[4] && data[2] === data[6] && data[2] !== "")
      );
    };

    const checkWin = (): boolean => {
      return checkRow() || checkCol() || checkDiagonal();
    };

    const checkTie = (): boolean => {
      return data.every(cell => cell !== "");
    };

    if (checkWin()) {
      setWinner(turn === 0 ? "Player 2 Wins!" : "Player 1 Wins!");
    } else if (checkTie()) {
      setWinner("It's a Tie!");
    }
  }, [data, setWinner, turn]);

  return (
    <div ref={boardRef} className="board">
      {Array.from({ length: 9 }, (_, i) => (
        <div
          key={i}
          className={`input input-${i + 1}`}
          onClick={(e) => draw(e, i + 1)}
        />
      ))}
    </div>
  );
};

