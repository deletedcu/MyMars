import React from 'react';
import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Lightbox from 'react-native-lightbox';
import PhotoView from 'react-native-photo-view';
import {shape, string} from 'prop-types';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';

const {width, height} = Dimensions.get('window');

const FavoriteItem = ({card, onPress}) => {
  const renderPhotoView = () => (
    <View style={{width, height}}>
      <PhotoView
        style={styles.photoView}
        source={card.photo}
        minimumZoomScale={1}
        maximumZoomScale={10}
        androidScaleType="fitCenter"
      />
      <View style={styles.lightBoxContainer}>
        <Text style={styles.title1} numberOfLines={1} ellipsizeMode="tail">
          {card.name}
        </Text>
        <Text style={styles.text1} numberOfLines={1} ellipsizeMode="tail">
          {card.description}
        </Text>
        <Text style={styles.text1} numberOfLines={1} ellipsizeMode="tail">
          {card.date}
        </Text>
      </View>
    </View>
  );

  return (
    <Lightbox
      renderHeader={close => (
        <TouchableOpacity onPress={close}>
          <Text style={styles.closeButton}>Close</Text>
        </TouchableOpacity>
      )}
      renderContent={renderPhotoView}
      springConfig={{tension: 248, friction: 26}}
      swipeToDismiss={true}
      underlayColor="transparent">
      <View style={styles.card} activeOpacity={1}>
        <Image style={styles.image} source={card.photo} resizeMode="cover" />
        <View style={styles.photoDescriptionContainer}>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
            {card.name}
          </Text>
          <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">
            {card.description}
          </Text>
          <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">
            {card.date}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={onPress}>
            <FontAwesome5 name="trash-alt" color="red" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </Lightbox>
  );
};

FavoriteItem.propTypes = {
  card: shape({
    photo: ImageSourcePropType,
    name: string,
    description: string,
    date: string,
  }).isRequired,
};

export default FavoriteItem;
