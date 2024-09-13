// import { useState, useEffect } from "react";
// // import wall from "./assets/wall.png";
// // import coin from "./assets/coin.png";
// import pacmann from "./assets/pacman.png";
// // import bg from "./assets/bg.png";
// import ghost from "./assets/ghost2.png";
// import "./pacman.scss"; 

// // Definindo tipos para o estado do Pac-Man e do mapa
// interface PacmanState {
//     x: number;
//     y: number;
// }

// type MapCell = number; // cada célula do mapa será um número
// type MapGrid = MapCell[][]; // o mapa é uma matriz 2D de números

// export function PacManGame() {
//     const [pacman, setPacman] = useState<PacmanState>({ x: 6, y: 4 });
//     const [map, setMap] = useState<MapGrid>([
//         [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//         [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1],
//         [1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1],
//         [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
//         [1, 2, 2, 2, 1, 1, 5, 1, 1, 2, 2, 2, 1],
//         [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
//         [1, 2, 1, 1, 2, 2, 1, 2, 2, 1, 1, 2, 1],
//         [1, 2, 2, 2, 2, 2, 1, 4, 2, 2, 2, 2, 1],
//         [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//     ]);
//     const [gameOver, setGameOver] = useState<boolean>(false);

//     // Definindo o tipo do evento como KeyboardEvent
//     const handleKeyDown = (event: KeyboardEvent) => {
//         if (gameOver) {
//             return; 
//         }
//         if (
//             event.key === "ArrowLeft" &&
//             pacman.x > 0 &&
//             map[pacman.y][pacman.x - 1] !== 1
//         ) {
//             setMap((prevMap) => {
//                 const newMap = [...prevMap];
//                 newMap[pacman.y][pacman.x] = 3;
//                 setPacman((prevPacman) => ({
//                     ...prevPacman,
//                     x: prevPacman.x - 1
//                 }));
//                 newMap[pacman.y][pacman.x - 1] = 5;
//                 return newMap;
//             });
//         } else if (
//             event.key === "ArrowUp" &&
//             pacman.y > 0 &&
//             map[pacman.y - 1][pacman.x] !== 1
//         ) {
//             setMap((prevMap) => {
//                 const newMap = [...prevMap];
//                 newMap[pacman.y][pacman.x] = 3;
//                 setPacman((prevPacman) => ({
//                     ...prevPacman,
//                     y: prevPacman.y - 1
//                 }));
//                 newMap[pacman.y - 1][pacman.x] = 5;
//                 return newMap;
//             });
//         } else if (
//             event.key === "ArrowRight" &&
//             pacman.x < map[0].length - 1 &&
//             map[pacman.y][pacman.x + 1] !== 1
//         ) {
//             setMap((prevMap) => {
//                 const newMap = [...prevMap];
//                 newMap[pacman.y][pacman.x] = 3;
//                 setPacman((prevPacman) => ({
//                     ...prevPacman,
//                     x: prevPacman.x + 1
//                 }));
//                 newMap[pacman.y][pacman.x + 1] = 5;
//                 return newMap;
//             });
//         } else if (
//             event.key === "ArrowDown" &&
//             pacman.y < map.length - 1 &&
//             map[pacman.y + 1][pacman.x] !== 1
//         ) {
//             setMap((prevMap) => {
//                 const newMap = [...prevMap];
//                 newMap[pacman.y][pacman.x] = 3;
//                 setPacman((prevPacman) => ({
//                     ...prevPacman,
//                     y: prevPacman.y + 1
//                 }));
//                 newMap[pacman.y + 1][pacman.x] = 5;
//                 return newMap;
//             });
//         }

//         checkWinningCondition();
//     };
    
//     const checkWinningCondition = () => {
//         if (!map.some((row) => row.includes(2))) {
//             setGameOver(true);
//             alert("Congratulations! You collected all the coins. You win!");
//         } else if (!map.some((row) => row.includes(4))) {
//             setGameOver(true);
//             alert("Game over !! You collided with the ghost");
//         }
//     };

//     useEffect(() => {
//         const handleKeyDownEvent = (event: KeyboardEvent) => handleKeyDown(event);
//         document.addEventListener("keydown", handleKeyDownEvent);

//         return () => {
//             document.removeEventListener("keydown", handleKeyDownEvent);
//         };
//     }, [handleKeyDown]);

//     return (
//         <div id="world" style={{ backgroundColor: "white" }}>
//             {map.map((row, rowIndex) => (
//                 <div key={rowIndex}>
//                     {row.map((cell, colIndex) => (
//                         <div
//                             key={colIndex}
//                             className={
//                                 cell === 1
//                                 ? "wall"
//                                 : cell === 2
//                                 ? "coin"
//                                 : cell === 3
//                                 ? "ground"
//                                 : cell === 4
//                                 ? "ghost"
//                                 : cell === 5
//                                 ? "pacman"
//                                 : null
//                             }
//                             style={
//                                 cell === 1
//                                     ? { backgroundImage: `url(${wall})` }
//                                     : cell === 2
//                                     ? { backgroundImage: `url(${coin})` }
//                                     : cell === 3
//                                     ? { backgroundImage: `url(${bg})` }
//                                     : cell === 4
//                                     ? { backgroundImage: `url(${ghost})` }
//                                     : cell === 5
//                                     ? { backgroundImage: `url(${pacmann})` }
//                                     : null
//                             }
//                         ></div>
//                     ))}
//                 </div>
//             ))}
//         </div>
//     );
// }
