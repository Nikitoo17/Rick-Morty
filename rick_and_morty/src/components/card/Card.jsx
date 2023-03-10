import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({ name, species, gender, image, onDelete, id }) {
  return (
    <div className={styles.CardContainer}>
      <div
        className={styles.CardImage}
        style={{ backgroundImage: `url(${image})` }}
      >
        <h3 className={styles.index}>{id}</h3>
        <div className={styles.CardInfo}>
          <button onClick={() => onDelete(id)} className={styles.Button}>
            X
          </button>
          <Link to={`/detail/${id}`}>
            <h3>{name}</h3>
          </Link>
          <h3>{species}</h3>
          <h3>{gender}</h3>
        </div>
      </div>
    </div>
  );
}
