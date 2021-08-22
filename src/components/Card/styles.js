import { StyleSheet, Dimensions } from "react-native";
const {height} = Dimensions.get("window");

export default StyleSheet.create({
  card: {
    flex: 1,
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
    left: 20,
    top: 20,
  },
  title: {
    fontSize: 24,
    color: "white",
    textShadowColor: "black",
    textShadowRadius: 10,
  },
  text: {
    fontSize: 18,
    color: "white",
    textShadowColor: "black",
    textShadowRadius: 10,
  },
});
