import styles from './GameCard.module.scss';

interface GameCardProps {
  title: string;
  imageUrl: string;
  description: string;
  onClick: () => void;
}

export function GameCard ({ title, imageUrl, description, onClick }: GameCardProps){
  return (
    <div className={styles.gameCard} onClick={onClick}>
      <img src={imageUrl} alt={title} className={styles.gameImage} />
      <div className={styles.gameInfo}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
