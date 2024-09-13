
import { useState, useEffect } from 'react';
import {Bird} from './Bird/Bird';
import {Pipes}from './Pipes/Pipes';
import './Flapbird.scss';
interface Position {
    x: number;
    y: number;
}

interface Pipe {
    x: number;
    y: number;
}

export function Flapbird() {
    const [birdPosition, setBirdPosition] = useState<Position>({ x: 50, y: 200 });
    const [pipes, setPipes] = useState<Pipe[]>([]);
    const [gameOver, setGameOver] = useState<boolean>(false);
    const [score, setScore] = useState<number>(0);
    const [gameStarted, setGameStarted] = useState<boolean>(false);

    const jump = () => {
        if (!gameOver && gameStarted) {
            setBirdPosition((prev) => ({ ...prev, y: prev.y - 60 }));
        } else if (!gameOver && !gameStarted) {
            setGameStarted(true);
        } else {
            setBirdPosition({ x: 50, y: 200 });
            setPipes([]);
            setGameOver(false);
            setGameStarted(true);
        }
    };

    const checkCollision = () => {
        const birdTop = birdPosition.y;
        const birdBottom = birdPosition.y + 50;
        const birdLeft = birdPosition.x;
        const birdRight = birdPosition.x + 50;

        pipes.forEach((pipe) => {
            const pipeTop = pipe.y;
            const pipeBottom = pipe.y + 600;
            const pipeLeft = pipe.x;
            const pipeRight = pipe.x + 100;

            const isColliding =
                birdRight > pipeLeft &&
                birdLeft < pipeRight &&
                birdBottom > pipeTop &&
                birdTop < pipeBottom;

            if (isColliding) {
                if (birdLeft > pipeLeft && birdRight < pipeRight && birdBottom < pipeBottom) {
                    setScore((prevScore) => prevScore + 1);
                } else {
                    setGameOver(true);
                    setGameStarted(false);
                }
            }
        });

        if (birdBottom > 800 || birdTop < -170) {
            setGameOver(true);
            setGameStarted(false);
        }
    };

    useEffect(() => {
        checkCollision();
    }, [birdPosition, pipes, gameOver]);

    useEffect(() => {
        const gravity = setInterval(() => {
            setBirdPosition((prev) => ({ ...prev, y: prev.y + 5 }));
            checkCollision();
        }, 30);

        const pipeGenerator = setInterval(() => {
            if (!gameOver && gameStarted) {
                setPipes((prev) => [
                    ...prev,
                    { x: 400, y: Math.floor(Math.random() * 300) },
                ]);
            }
        }, 2000);

        const pipeMove = setInterval(() => {
            if (!gameOver && gameStarted) {
                setPipes((prev) =>
                    prev.map((pipe) => ({ ...pipe, x: pipe.x - 5 }))
                );
            }
        }, 30);

        return () => {
            clearInterval(gravity);
            clearInterval(pipeGenerator);
            clearInterval(pipeMove);
        };
    }, [gameOver, gameStarted]);

    return (
        <div className={`App ${gameOver ? 'game-over' : ''}`} onClick={jump}>
            <Bird birdPosition={birdPosition} />
            {pipes.map((pipe, index) => (
                <Pipes key={index} pipePosition={pipe} />
            ))}
            {gameOver && (
                <center>
                    <div className="game-over-message">
                        Game Over!
                        <br />
                        <p style={{ backgroundColor: 'blue', padding: "2px 6px", borderRadius: '5px' }}>
                            Click anywhere to Restart
                        </p>
                    </div>
                </center>
            )}
        </div>
    );
}
