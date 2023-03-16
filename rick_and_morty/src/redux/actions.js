export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const FILTER_CARD = "FILTER_CARD";
export const ORDER_CARDS = "ORDER_CARDS";
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
export const filterCard = (gender) => {
  return {
    type: FILTER_CARD,
    payload: gender,
  };
};
export const orderCards = (order) => {
  return {
    type: ORDER_CARDS,
    payload: order,
  };
};
