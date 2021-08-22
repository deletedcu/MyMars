import {combineReducers} from 'redux';
import cardReducer from './reducers/cardReducer';
import favoriteReducer from './reducers/favoriteReducer';
const rootReducer = combineReducers({
  card: cardReducer,
  favorite: favoriteReducer,
});

export default rootReducer;
