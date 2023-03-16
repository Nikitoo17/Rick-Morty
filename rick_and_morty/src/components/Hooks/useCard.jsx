import { /*connect,*/ useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { addFavorite, removeFavorite } from "../../redux/actions";

function useCard({ name, species, gender, image, id }) {
  const [isFav, setIsFav] = useState(false);
  const Favorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFavorite({ id }));
    } else {
      setIsFav(true);
      dispatch(
        addFavorite({
          name,
          species,
          gender,
          image,
          id,
        })
      );
    }
  };

  useEffect(() => {
    Favorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
    // eslint-disable-next-line
  }, [isFav]);
  return { handleFavorite, isFav };
}
export default useCard;
