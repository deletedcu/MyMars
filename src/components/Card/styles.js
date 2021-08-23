import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 12,
    shadowOpacity: 0.5,
    elevation: 2,
  },
  image: {
    borderRadius: 12,
    flex: 1,
    width: '100%',
  },
  photoDescriptionContainer: {
    position: 'absolute',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    left: 20,
    top: 20,
  },
  title: {
    fontSize: 24,
    color: 'white',
    textShadowColor: 'black',
    textShadowRadius: 10,
  },
  text: {
    fontSize: 18,
    color: 'white',
    textShadowColor: 'black',
    textShadowRadius: 10,
  },
});
