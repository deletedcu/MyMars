import React, {PureComponent} from 'react';
import {Animated, TouchableOpacity, Dimensions} from 'react-native';
import {func, string} from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';

const {width} = Dimensions.get('window');

class IconButton extends PureComponent {
  constructor(props) {
    super(props);

    this.pan = new Animated.ValueXY();
    this.animation = new Animated.Value(0);
    this.inputOpacityRangeX = [-width / 2, -width / 3, 0, width / 3, width / 2];
    this.outputOpacityRangeX = [0.6, 0.8, 1, 0.8, 0.6];
    this.inputRangeX = [0, 1];
    this.outputRangeX = [1, 1.8];
    this.opacity = 1;
    this.scale = this.animation.interpolate({
      inputRange: this.inputRangeX,
      outputRange: this.outputRangeX,
    });
    this.previousX = 0;
  }

  animateX = x => {
    if (Math.abs(this.previousX - x) < 30) {
      return;
    }
    if (x < 0) {
      this.pan.setValue({x: x, y: 0});
      this.opacity = this.interpolateOpacity();
    } else {
      this.animation.setValue(x / width);
      this.scale = this.interpolateScale();
    }
    this.previousX = x;
  };

  reset = () => {
    this.animation.setValue(0);
    this.pan.setValue({x: 0, y: 0});
  };

  interpolateOpacity = () => {
    const opacity = this.pan.x.interpolate({
      inputRange: this.inputOpacityRangeX,
      outputRange: this.outputOpacityRangeX,
    });
    return opacity;
  };

  interpolateScale = () => {
    const scale = this.animation.interpolate({
      inputRange: this.inputRangeX,
      outputRange: this.outputRangeX,
    });
    return scale;
  };

  onPressIn = () => {
    Animated.spring(this.animation, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  onPressOut = () => {
    Animated.spring(this.animation, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  render() {
    return (
      <Animated.View
        style={[
          styles.button,
          this.props.buttonStyle,
          {opacity: this.opacity},
          {transform: [{scale: this.scale}]},
        ]}>
        <TouchableOpacity
          style={styles.singleButton}
          onPress={this.props.onPress}
          onPressIn={this.onPressIn}
          onPressOut={this.onPressOut}
          activeOpacity={1}>
          <Icon name={this.props.name} size={20} color={this.props.color} />
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

IconButton.defaultProps = {
  color: 'white',
};
IconButton.propTypes = {
  onPress: func.isRequired,
  name: string.isRequired,
  color: string,
};

export default IconButton;
