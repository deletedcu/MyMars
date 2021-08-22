import {photoCards} from '../constants';

export const getCards = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(photoCards);
    }, 2000);
  });
};
