import SearchBar from "../search/SearchBar";
import styles from "./nav.module.css";

export default function Nav({ onSearch, logout }) {
  function randomNum() {
    const randomNumber = Math.floor(Math.random() * 826) + 1;
    return randomNumber;
  }
  return (
    <div className={styles.nav}>
      <button
        className={styles.random}
        onClick={() => {
          onSearch(randomNum());
        }}
      >
        Random{" "}
      </button>
      <SearchBar onSearch={onSearch} />
      <button className={styles.random} onClick={() => logout()}>
        {" "}
        Logout
      </button>
    </div>
  );
}
