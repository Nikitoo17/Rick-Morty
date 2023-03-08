import Card from "../card/Card";
import styles from "./Cards.module.css";

export default function Cards({ characters, value }) {
  const asao = value;
  const personajes = characters.map(({ name, id, image, species, gender }) => (
    <Card
      key={id}
      id={id}
      onDelete={asao}
      name={name}
      image={image}
      species={species}
      gender={gender}
    />
  ));
  return <div className={styles.Cards}>{personajes}</div>;
}
