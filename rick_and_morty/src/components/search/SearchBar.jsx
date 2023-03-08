import { useState } from "react";
import styles from "./SearchBar.module.css";
export default function SearchBar(props) {
  const [character, setCharacter] = useState("");

  const handleSubmit = (event) => {
    console.log(props);
    event.preventDefault();
    props.onSearch(character);
  };

  const handleInputChange = (event) => {
    setCharacter(event.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <input
        className={styles.input}
        type="text"
        onChange={handleInputChange}
      />
      <button className={styles.add} onClick={handleSubmit}>
        Agregar
      </button>
    </div>
  );
}
