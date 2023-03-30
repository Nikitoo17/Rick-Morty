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
      const favExist = action.payload.id;
      const exists = state.myFavorites.find((fav) => fav === favExist);
      if (!exists) {
        return {
          ...state,
          myFavorites: [...state.myFavorites, action.payload],
          allCharacters: [...state.allCharacters, action.payload],
        };
      } else {
        return state;
      }
    case REMOVE_FAVORITE:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (favorite) => favorite.id !== action.payload.id
        ),
      };
    case FILTER_CARD:
      if (action.payload === "All") {
        return {
          ...state,
          myFavorites: state.allCharacters,
        };
      } else {
        const filter = state.allCharacters.filter(
          (char) => char.gender === action.payload
        );
        return {
          ...state,
          myFavorites: filter,
        };
      }
    case ORDER_CARDS:
      let sort = [...state.myFavorites];
      if (action.payload === "Ascendente") {
        return {
          ...state,
          myFavorites: sort.sort((a, b) => a.id - b.id),
        };
      } else if (action.payload === "Descendente") {
        return {
          ...state,
          myFavorites: sort.sort((a, b) => b.id - a.id),
        };
      } else {
        return {
          ...state,
          myFavorites: sort,
        };
      }

    default:
      return state;
  }
}
//
