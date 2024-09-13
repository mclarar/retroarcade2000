
import {GameCard} from '../GameCard/GameCard'
import styles from './GameList.module.scss'
import { games } from '../../gamesList';
import { useNavigate } from 'react-router-dom';

export function GameList(){
  const navigate = useNavigate();
  return (
    <div className={styles.gameList}>
   {games.map((game, index) => (
  <GameCard
    key={index}
    title={game.title}
    imageUrl={game.imageUrl}
    description={game.description}
    onClick={() => {
      if (game.title === "Simon Says") {
        window.location.href = "https://mclarar.github.io/SimonSaysGame/";
      } else {
        navigate(game.route);
      }
    }}
  />
))}
    </div>
  );
};
