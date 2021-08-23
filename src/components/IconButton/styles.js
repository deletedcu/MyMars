import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  button: {
    backgroundColor: 'white',
    width: 60,
    height: 60,
    borderRadius: 60,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    elevation: 5,
  },
  singleButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
