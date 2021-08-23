import * as cardTypes from '../types/cardTypes';

const initialState = {
  loading: true,
  page: 1,
  cards: [],
};

const cardReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case cardTypes.LOADING:
      return {...state, loading: payload};
    case cardTypes.CARDS:
      let newCards = Object.assign([], state.cards);
      newCards.push(...payload.data);
      return {...state, loading: false, cards: newCards, page: payload.page};
    default:
      return state;
  }
};

export default cardReducer;
