import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#F7F2FF",
    width: width,
    height: width,
  },
  textInput: {
    width: width * 0.8, // Defina a largura específica
    height: 50,
    marginVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: "#F7F2FF",
    borderWidth: 3,
    borderColor: "#A594F9",
  },
  title: {
    fontFamily: "LilyScriptOne_400Regular",
    fontSize: 46,
    color: "#A594F9",
    marginBottom: 20,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    transform: [{ translateX: 45 }],
  },
  btn: {
    width: width * 0.8, // Mesmo tamanho dos inputs
    height: 50,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#A594F9",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "rgba(165, 148, 249, 1)",
    color: "black",
    fontWeight: "bold",
  },
  btnPhoto: {
    width: width * 0.8,
    height: 150,
    marginTop: 20,
    justifyContent: "space-around",
    backgroundColor: "#F7F2FF",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "rgba(165, 148, 249, 1)",
    padding: 10,
  },
  btnText: {
    fontFamily: "JosefinSans_400Regular",
    fontWeight: "bold",
    fontSize: 16,
    color: "#000",
  },
});

export default Styles;
