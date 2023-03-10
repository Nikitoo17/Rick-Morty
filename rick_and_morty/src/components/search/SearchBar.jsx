import { useState } from "react";
import styles from "./SearchBar.module.css";
export default function SearchBar({ onSearch }) {
  const [character, setCharacter] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(character);
  };

  const handleInputChange = (event) => {
    setCharacter(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} style={{}}>
      <input
        className={styles.input}
        type="text"
        onChange={handleInputChange}
      />
      <button className={styles.add}>Agregar</button>
    </form>
  );
}
