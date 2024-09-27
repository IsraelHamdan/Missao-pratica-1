import { PaperProvider } from "react-native-paper";
import Cadastro from "./components/cadastroFornecedor/Cadastro";
import React, { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Fonts from "expo-font";
import { JosefinSans_400Regular } from "@expo-google-fonts/josefin-sans";
import { LilyScriptOne_400Regular } from "@expo-google-fonts/lily-script-one";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import { Props, RootStackParamList } from "./utils/Props";
import ListaFornecedores from "./components/ListaFornecedor/ListaFornecedor";
import FornecedorProvider from "./contexts/FornecedorContext";

const Stack = createStackNavigator<RootStackParamList>();
SplashScreen.preventAutoHideAsync();
export default function App() {
  const [appIsReady, setAppIsReady] = useState<boolean>(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Fonts.loadAsync({
          JosefinSans_400Regular,
          LilyScriptOne_400Regular,
        });
      } catch (err) {
        console.warn(err);
        setAppIsReady(false);
      } finally {
        setAppIsReady(true);
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);
  if (!appIsReady) return null;
  return (
    <FornecedorProvider>
      <NavigationContainer>
        <PaperProvider>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
            <Stack.Screen name="Lista" component={ListaFornecedores} />
          </Stack.Navigator>
        </PaperProvider>
      </NavigationContainer>
    </FornecedorProvider>
  );
}
