import React from 'react';
import {View, Text, Image} from 'react-native';
import {shape, string} from 'prop-types';
import styles from './styles';

const Card = ({card}) => (
  <View style={styles.card} activeOpacity={1}>
    <Image
      style={styles.image}
      source={{uri: card.img_src}}
      resizeMode="cover"
    />
    <View style={styles.photoDescriptionContainer}>
      <Text style={styles.title}>{card.title}</Text>
      <Text style={styles.text}>{card.name}</Text>
      <Text style={styles.text}>{card.date}</Text>
    </View>
  </View>
);

Card.propTypes = {
  card: shape({
    img_src: string,
    title: string,
    name: string,
    date: string,
  }).isRequired,
};

export default Card;
