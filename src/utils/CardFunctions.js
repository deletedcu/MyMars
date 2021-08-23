import {photoCards} from '../constants';

export const getCards = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(photoCards);
    }, 2000);
  });
};

export const parseCards = data => {
  const newData = data.map(item => {
    return {
      id: item.id,
      title: item.rover.name,
      name: item.camera.full_name,
      date: item.earth_date,
      img_src: item.img_src,
    };
  });
  return newData;
};
