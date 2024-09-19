import { View, StyleSheet, SafeAreaView } from "react-native";
import { PaperProvider, Text, Button } from "react-native-paper";
import Cadastro from "./components/cadastroFornecedor/Cadastro";
import { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import { JosefinSans_400Regular } from "@expo-google-fonts/josefin-sans";
import { LilyScriptOne_400Regular } from "@expo-google-fonts/lily-script-one";
import * as SplashScreen from "expo-splash-screen";
import * as Fonts from "expo-font";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
    LilyScriptOne_400Regular,
  });
  useEffect(() => {
    const prepare = async () => {
      if (!fontsLoaded) {
        console.log(fontsLoaded);
        await SplashScreen.preventAutoHideAsync();
      } else {
        await SplashScreen.hideAsync();
      }
    };
    prepare();
  });
  return (
    <PaperProvider>
      <SafeAreaView style={styles.continer}>
        <View style={styles.titleView}>
          <Text style={styles.h1} variant="displayMedium">
            Olá
          </Text>
          <Text style={styles.h1} variant="displayMedium">
            Meeting
          </Text>
        </View>
        <View style={styles.btnView}>
          <Button style={styles.btn}>Cadastrar fornecedor</Button>
          <Button style={styles.btn}>Listar fornecedores</Button>
          <Button style={styles.btn}>Cadastrar produtos</Button>
          <Button style={styles.btn}>Listar produtos</Button>
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
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
  titleView: {},
  btnView: {
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
