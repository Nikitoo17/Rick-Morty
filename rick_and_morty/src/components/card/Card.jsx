import styles from "./Card.module.css";

export default function Card({ name, species, gender, image, onClose }) {
  return (
    <div className={styles.CardContainer}>
      <div
        className={styles.CardImage}
        style={{ backgroundImage: `url(${image})` }}
      >
        <button onClick={onClose} className={styles.Button}>
          X
        </button>
        <h2 className={styles.CardName}>{name}</h2>
      </div>
      <div className={styles.Date}>
        <h2>{species}</h2>
        <h2>{gender}</h2>
      </div>
    </div>
  );
}
