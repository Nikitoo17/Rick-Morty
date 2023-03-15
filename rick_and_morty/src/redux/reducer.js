import { ADD_FAVORITE, REMOVE_FAVORITE } from "./actions";
const initialState = {
  myFavorites: [],
};
export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (favorite) => favorite.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
}
