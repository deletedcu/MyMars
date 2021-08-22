import * as cardTypes from "../types/cardTypes";
import * as CardFunctions from "../../utils/CardFunctions";

export const setLoading = status => {
  return dispatch => {
    dispatch({type: cardTypes.LOADING, payload: status});
  };
};

export const getCards = () => {
  return async dispatch => {
    const cards = await CardFunctions.getCards();
    dispatch({type: cardTypes.CARDS, payload: cards});
  };
};
