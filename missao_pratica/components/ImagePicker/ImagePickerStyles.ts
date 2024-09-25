import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    alignItems: "center",
    marginVertical: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
  modal: {
    backgroundColor: "#F7F2FF",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    width: "100%",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: width * 0.3,
    justifyContent: "center",
    marginVertical: 10,
  },
});

export default Styles;
