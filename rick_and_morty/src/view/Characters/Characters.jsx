import Cards from "../../components/cards/Cards.jsx";
import Nav from "../../components/nav/Nav.jsx";
import styles from "./Characters.module.css";

export default function Characters({ characters, onDelete, onSearch, logout }) {
  return (
    <div className={styles.main}>
      <div className={styles.SearchBar}>
        <Nav onSearch={onSearch} logout={logout} />
      </div>
      <Cards characters={characters} onDelete={onDelete} />
    </div>
  );
}
