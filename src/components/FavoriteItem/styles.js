import { StyleSheet, Dimensions, Platform } from "react-native";
const {width, height} = Dimensions.get("window");
const isIphoneX =
  Platform.OS === 'ios' && (height >= 812 || width >= 812);

const itemWidth = width / 2 - 8;
export default StyleSheet.create({
  card: {
    flexDirection: 'column',
    width: itemWidth,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    shadowOpacity: 0.3,
    elevation: 2,
    margin: 4,
  },
  image: {
    borderRadius: 8,
    flex: 1,
    width: "100%",
  },
  photoDescriptionContainer: {
    position: "absolute",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    left: 6,
    top: 10,
    right: 6,
  },
  lightBoxContainer: {
    position: "absolute",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    left: 20,
    top: isIphoneX ? 60 : 40,
  },
  title: {
    fontSize: 18,
    color: "white",
    textShadowColor: "black",
    textShadowRadius: 10,
  },
  text: {
    fontSize: 16,
    color: "white",
    textShadowColor: "black",
    textShadowRadius: 10,
  },
  buttonContainer: {
    position: "absolute",
    top: 4,
    right: 0,
  },
  button: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  closeButton: {
    color: 'white',
    borderWidth: 1,
    borderColor: 'white',
    padding: 8,
    borderRadius: 3,
    textAlign: 'center',
    marginRight: 10,
    marginTop: isIphoneX ? 40: 20,
    alignSelf: 'flex-end',
    textShadowColor: "black",
    textShadowRadius: 10,
  },
});
