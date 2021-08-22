import {useSelector} from 'react-redux';
import {useDispatchWrap} from './utilHooks';
import {getFavorites, setFavorite, setUnFavorite} from '../redux';

export const useFavorites = () => {
  const {favorites} = useSelector(state => state.favorite);
  const getFavoritesF = useDispatchWrap(getFavorites);
  const setFavoriteF = useDispatchWrap(setFavorite);
  const setUnFavoriteF = useDispatchWrap(setUnFavorite);
  return {favorites, getFavoritesF, setFavoriteF, setUnFavoriteF};
};
