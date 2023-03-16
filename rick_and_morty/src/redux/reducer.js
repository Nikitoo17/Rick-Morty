import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  FILTER_CARD,
  ORDER_CARDS,
} from "./actions";
const initialState = {
  myFavorites: [],
  allCharacters: [],
};
export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: [...state.allCharacters, action.payload],
        allCharacters: [...state.allCharacters, action.payload],
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (favorite) => favorite.id !== action.payload.id
        ),
      };
    case FILTER_CARD:
      const filter = state.allCharacters.filter(
        (char) => char.gender === action.payload
      );
      return {
        ...state,
        myFavorites: filter,
      };
    case ORDER_CARDS:
      let sort = [...state.myFavorites];
      if (action.payload === "Ascendente") {
        return {
          ...state,
          myFavorites: sort.sort((a, b) => a.id - b.id),
        };
      } else {
        return {
          ...state,
          myFavorites: sort.sort((a, b) => b.id - a.id),
        };
      }

    default:
      return state;
  }
}
