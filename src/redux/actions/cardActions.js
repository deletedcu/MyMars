import axios from 'axios';
import * as cardTypes from '../types/cardTypes';
import * as CardFunctions from '../../utils/CardFunctions';
import {BASE_URL} from '../../config/Constants';
import {logError} from '../../utils/LogUtils';

export const setLoading = status => {
  return dispatch => {
    dispatch({type: cardTypes.LOADING, payload: status});
  };
};

export const getCards = page => {
  return async dispatch => {
    try {
      const res = await axios.get(`${BASE_URL}&page=${page}`);
      if (res?.status === 200) {
        const data = CardFunctions.parseCards(res.data.photos);
        dispatch({type: cardTypes.CARDS, payload: {data, page: page + 1}});
      } else {
        dispatch({type: cardTypes.CARDS, payload: {data: [], page: page + 1}});
      }
    } catch (e) {
      logError('getCards', e);
    }
  };
};
