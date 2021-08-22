import React from 'react';
import {TouchableOpacity} from 'react-native';
import {func, string} from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';

const IconButton = ({onPress, name, backgroundColor, color}) => (
  <TouchableOpacity
    style={[styles.singleButton, {backgroundColor}]}
    onPress={onPress}
    activeOpacity={0.85}>
    <Icon name={name} size={20} color={color} />
  </TouchableOpacity>
);

IconButton.defaultProps = {
  color: 'white',
  backgroundColor: 'black',
};
IconButton.propTypes = {
  onPress: func.isRequired,
  name: string.isRequired,
  color: string,
  backgroundColor: string,
};

export default IconButton;
