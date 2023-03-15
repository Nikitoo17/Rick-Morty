export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const addFavorite = (personaje) => {
  return {
    type: ADD_FAVORITE,
    payload: personaje,
  };
};
export const removeFavorite = (id) => {
  return {
    type: REMOVE_FAVORITE,
    payload: id,
  };
};
