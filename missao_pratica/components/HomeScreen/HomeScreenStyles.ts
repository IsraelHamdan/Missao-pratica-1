import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");
const Styles = StyleSheet.create({
  continer: {
    flex: 1,
    backgroundColor: "#F5EFFF",
    justifyContent: "center",
    height: "100%",
    fontFamily: "JosefinSans_400Regular",
    alignItems: "center",
    width: width,
  },
  titleView: {},

  h1: {
    fontSize: 66,
    color: "#A594F9",
    fontFamily: "LilyScriptOne_400Regular",
  },

  btnView: {
    margin: width * 0.1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  btn: {
    backgroundColor: "#F5EFFF",
    width: width * 0.8,
    height: 50,
    borderColor: "#A594F9",
    borderRadius: 10,
    borderWidth: 2,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  textBtn: {
    fontFamily: "JosefinSans_400Regular",
    fontWeight: "bold",
    fontSize: 16,
    color: "#A584F8",
  },
});

export default Styles;
