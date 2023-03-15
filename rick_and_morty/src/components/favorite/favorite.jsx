import { useSelector } from "react-redux";
import styles from "./favorite.module.css";
import Card from "../card/Card";
export default function Favorite() {
  const Favorites = useSelector((state) => state.myFavorites);
  const personajes = Favorites.map(({ name, id, image, species, gender }) => (
    <Card
      key={id}
      id={id}
      name={name}
      image={image}
      species={species}
      gender={gender}
    />
  ));
  return <div className={styles.main}>{personajes}</div>;
}
