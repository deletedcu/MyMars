import * as favoriteTypes from '../types/favoriteTypes';

const initialState = {
  favorites: [],
};

const favoriteReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case favoriteTypes.FAVORITES:
      return {...state, favorites: state.favorites};
    case favoriteTypes.ADD:
      let newFavorites = state.favorites.filter(
        item => item.key !== payload.card.key,
      );
      newFavorites.push(payload.card);
      return {...state, favorites: newFavorites};
    case favoriteTypes.REMOVE:
      newFavorites = state.favorites.filter(
        item => item.key !== payload.card.key,
      );
      return {...state, favorites: newFavorites};
    default:
      return state;
  }
};

export default favoriteReducer;
