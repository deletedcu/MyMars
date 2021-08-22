import React from 'react';
import {View, Text, Image, ImageSourcePropType} from 'react-native';
import {shape, string} from 'prop-types';
import styles from './styles';

const Card = ({card}) => (
  <View style={styles.card} activeOpacity={1}>
    <Image style={styles.image} source={card.photo} resizeMode="cover" />
    <View style={styles.photoDescriptionContainer}>
      <Text style={styles.title}>{card.name}</Text>
      <Text style={styles.text}>{card.description}</Text>
      <Text style={styles.text}>{card.date}</Text>
    </View>
  </View>
);

Card.propTypes = {
  card: shape({
    photo: ImageSourcePropType,
    name: string,
    description: string,
    date: string,
  }).isRequired,
};

export default Card;
