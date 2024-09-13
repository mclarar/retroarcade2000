import { GameList } from "../../components/GameList/GameList";
import styles from "./Home.module.scss";

export function Home() {
  return (
    <div className={styles.homeContainer}>
      {/* <Navbar /> */}
      <header className={styles.header}>
        <h1>Welcome to RetroArcade 2000</h1>
      </header>
      <GameList />
    </div>
  );
}
