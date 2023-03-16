import { useDispatch, useSelector } from "react-redux";
import styles from "./favorite.module.css";
import Card from "../card/Card";
import { filterCard, orderCards } from "../../redux/actions";
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

  const dispatch = useDispatch();

  const handleChangeOrder = (event) => {
    dispatch(orderCards(event.target.value));
  };
  const handleChangeFilter = (event) => {
    dispatch(filterCard(event.target.value));
  };

  return (
    <div className={styles.main}>
      <div>
        <select name="Order" onChange={handleChangeOrder}>
          <option value="All">ORDER</option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select name="Gender" onChange={handleChangeFilter}>
          <option value="All">ALL GENDER</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="Unknown">Unknown</option>
        </select>
      </div>
      <div className={styles.characters}>{personajes}</div>
    </div>
  );
}
