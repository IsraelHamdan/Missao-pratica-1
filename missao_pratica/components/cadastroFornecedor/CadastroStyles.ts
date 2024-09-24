import { StyleSheet } from "react-native";
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#F7F2FF",
  },
  textInput: {
    width: 300, // Defina a largura específica
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
  },
  btn: {
    width: 300, // Mesmo tamanho dos inputs
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
    width: 300,
    height: 150,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F7F2FF",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "rgba(165, 148, 249, 1)",
  },
  btnText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Styles;
