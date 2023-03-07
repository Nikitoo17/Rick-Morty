import Card from "../card/Card";
import styles from "./Cards.module.css";

export default function Cards(props) {
  const { characters } = props;
  const personajes = characters.map(({ name, id, image, species, gender }) => (
    <Card
      key={id}
      onClose={() => window.alert(name)}
      name={name}
      image={image}
      species={species}
      gender={gender}
    />
  ));
  return <div className={styles.Cards}>{personajes}</div>;
}
