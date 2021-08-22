import * as favoriteTypes from "../types/favoriteTypes";

export const getFavorites = () => {
  return async dispatch => {
    dispatch({type: favoriteTypes.FAVORITES});
  };
};

export const setFavorite = (card) => {
  return dispatch => {
    dispatch({type: favoriteTypes.ADD, payload: {card}});
  };
};

export const setUnFavorite = (card) => {
  return dispatch => {
    dispatch({type: favoriteTypes.REMOVE, payload: {card}});
  };
};
