import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/actions";
import { useState, useEffect } from "react";

function Card({
  name,
  species,
  gender,
  image,
  onDelete,
  id,
  card,
  addFavorite,
  removeFavorite,
  myFavorites,
}) {
  const [isFav, setIsFav] = useState(false);
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFavorite({ id });
    } else {
      setIsFav(true);
      addFavorite({
        name,
        species,
        gender,
        image,
        onDelete,
        id,
      });
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
    console.log(myFavorites);
    // eslint-disable-next-line
  }, [isFav]);

  return (
    <div className={styles.CardContainer}>
      <div
        className={styles.CardImage}
        style={{ backgroundImage: `url(${image})` }}
      >
        <h3 className={styles.index}>{id}</h3>

        <div className={styles.CardInfo}>
          {card ? (
            <button onClick={() => onDelete(id)} className={styles.Button}>
              X
            </button>
          ) : (
            ""
          )}
          <Link to={`/detail/${id}`}>
            <h3>{name}</h3>
          </Link>
          <h3>{species}</h3>
          <h3>{gender}</h3>
          {isFav ? (
            <button className={styles.fav} onClick={handleFavorite}>
              ❤️
            </button>
          ) : (
            <button className={styles.fav} onClick={handleFavorite}>
              🤍
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (character) => dispatch(addFavorite(character)),
    removeFavorite: (id) => dispatch(removeFavorite(id)),
  };
};
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
