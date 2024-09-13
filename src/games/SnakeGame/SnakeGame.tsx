import { useState, useEffect } from 'react';
import '../../styles/game.scss';

type Position = [number, number];

export function SnakeGame() {
  const [snake, setSnake] = useState<Position[]>([[10, 10]]);
  const [direction, setDirection] = useState<Position>([0, 1]);

  useEffect(() => {
    const gameLoop = setInterval(() => {
      setSnake(snake => {
        const newHead: Position = [snake[0][0] + direction[0], snake[0][1] + direction[1]];
        return [newHead, ...snake.slice(0, -1)];
      });
    }, 200);

    return () => clearInterval(gameLoop);
  }, [direction]);

  return (
    <div className="snake">
      {snake.map((segment, index) => (
        <div key={index} className="snake-segment" style={{ left: segment[0] * 10, top: segment[1] * 10 }}></div>
      ))}
    </div>
  );
};

