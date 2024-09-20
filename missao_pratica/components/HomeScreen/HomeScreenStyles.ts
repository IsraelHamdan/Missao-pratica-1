import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  continer: {
    flex: 1,
    backgroundColor: "#F5EFFF",
    justifyContent: "center",
    height: "100%",
    fontFamily: "JosefinSans_400Regular",
    alignItems: "center",
    width: "100%",
  },
  h1: {
    fontSize: 46,
    color: "#A594F9",
    fontFamily: "LilyScriptOne_400Regular",
    marginBottom: 20,
  },
  titleView: {
    marginTop: "1%",
  },
  btnView: {
    margin: "10%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  btn: {
    backgroundColor: "#F5EFFF",
    width: 250,
    height: 50,
    borderColor: "#A594F9",
    borderRadius: 10,
    borderWidth: 2,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "JosefinSans_400Regular",
  },
});

export default Styles;
