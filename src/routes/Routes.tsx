import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/homepage/home";
import TicTacToe from "../games/Tictactoe/Tictactoe";
import { SnakeGame } from "../games/SnakeGame/SnakeGame";
import { Pong } from "../games/Pong/Pong";
import { Flapbird } from "../games/FlapBird/Flapbird";
// import { PacManGame } from "../games/Pacman/Pacman";

export const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tic-tac-toe" element={<TicTacToe />} />
      <Route path="/snake-game" element={<SnakeGame />} />
      <Route path="/pong" element={<Pong />} />
      <Route path="/flapbird" element={<Flapbird />} />
      {/* <Route path="/pac-man" element={<PacManGame />} /> */}
    </Routes>
  );
};
