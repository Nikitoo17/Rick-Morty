import styles from "./Card.module.css";

export default function Card({ name, species, gender, image, onDelete, id }) {
  return (
    <div className={styles.CardContainer}>
      <div
        className={styles.CardImage}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={styles.CardInfo}>
          <button onClick={() => onDelete(id)} className={styles.Button}>
            X
          </button>
          <h3>{name}</h3>
          <h3>{species}</h3>
          <h3>{gender}</h3>
        </div>
      </div>
    </div>
  );
}
