import Card from "../card/Card";
import styles from "./Cards.module.css";

export default function Cards({ characters, onDelete }) {
  const personajes = characters.map(({ name, id, image, species, gender }) => (
    <Card
      key={id}
      id={id}
      onDelete={onDelete}
      name={name}
      image={image}
      species={species}
      gender={gender}
      card={true}
    />
  ));
  return <div className={styles.Cards}>{personajes}</div>;
}
