import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {useFavorites} from '../../hooks';
import {FavoriteItem} from '../../components';
import styles from './styles';

const FavoriteScreen = () => {
  const {favorites, getFavoritesF, setUnFavoriteF} = useFavorites();

  useEffect(() => {
    getFavoritesF();
  }, [favorites]);

  const handleOnRemove = card => {
    setUnFavoriteF(card);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        keyExtractor={item => item.id}
        renderItem={card => (
          <FavoriteItem
            card={card.item}
            onPress={() => handleOnRemove(card.item)}
          />
        )}
        numColumns={2}
      />
    </View>
  );
};

export default FavoriteScreen;
