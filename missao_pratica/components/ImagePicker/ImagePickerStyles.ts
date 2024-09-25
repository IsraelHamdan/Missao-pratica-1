import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
const Styles = StyleSheet.create({
  view: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  portalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    position: "relative",
  },
  image: {
    width: 100,
    height: 100,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 100,
    width: 100,
    position: "absolute",
    transform: [{ translateX: 30 }, { translateY: -35 }],
  },
  btn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "#F7F2FF",
    overflow: "visible",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    width: "80%",
    height: "110%",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 10,
    transform: [{ translateX: -115 }, { translateY: -60 }],
    top: "50%",
    left: "50%",
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
  textBtn: {
    marginBottom: 10,
    color: "rgba(165, 148, 249, 1)",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "JosefinSans_400Regular",
    fontStyle: "italic",
  },
});

export default Styles;
