import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./DetailID.module.css";
export default function DetailID() {
  const [character, setCharacter] = useState({});
  const { detailID } = useParams();

  useEffect(() => {
    fetch(` http://localhost:3001/rickandmorty/detail/${detailID}`)
      .then((response) => response.json())
      .then((data) => setCharacter(data));
  }, [detailID]);

  return (
    <div className={styles.main}>
      {character.name ? (
        <>
          <img className={styles.image} src={character.image} alt="" />
          <div className={styles.details}>
            <h3>Name : {character.name}</h3>
            <h3>Status : {character.status}</h3>
            <h3>Specie : {character.species}</h3>
            <h3>Gender : {character.gender}</h3>
            <h3>Origin : {character.origin?.name}</h3>
          </div>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
