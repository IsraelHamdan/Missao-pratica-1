import { StyleSheet } from "react-native";
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#F7F2FF", // A cor de fundo que você deseja
  },
  textInput: {
    width: 300, // Defina a largura específica
    height: 50, // Defina a altura para parecer um botão
    marginVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#A594F9", // Cor da borda
  },
  title: {
    fontFamily: "LilyScriptOne_400Regular ",
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
    backgroundColor: "#F7F2FF",
    borderRadius: 10,
    borderBlockColor: "#A594F9",
  },
  btnPhoto: {
    width: 300, // Mesmo tamanho dos inputs
    height: 150,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F7F2FF",
    borderRadius: 10,
    borderColor: "#A594F9",
  },
});

export default Styles;
