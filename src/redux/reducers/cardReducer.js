import * as cardTypes from '../types/cardTypes';

const initialState = {
  loading: true,
  cards: [],
};

const cardReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case cardTypes.LOADING:
      return {...state, loading: payload};
    case cardTypes.CARDS:
      return {...state, loading: false, cards: payload};
    default:
      return state;
  }
};

export default cardReducer;
