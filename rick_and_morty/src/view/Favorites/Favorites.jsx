import Favorite from "../../components/favorite/favorite";
import styles from "./Favorites.module.css";
export default function Favorites() {
  return (
    <div className={styles.main}>
      <Favorite />
    </div>
  );
}
