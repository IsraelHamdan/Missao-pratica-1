import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { Text, Button } from "react-native-paper";

import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
export type HomeScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  "Home",
  "Cadastro"
>;
type Props = {
  navigation: HomeScreenNavigationProps;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.continer}>
      <View style={styles.titleView}>
        <Text style={styles.h1}>Meeting</Text>
      </View>
      <View style={styles.btnView}>
        <Button
          style={styles.btn}
          onPress={() => navigation.navigate("Cadastro")}>
          Cadastrar fornecedor
        </Button>
        <Button style={styles.btn} onPress={() => {}}>
          Listar fornecedores
        </Button>
        <Button style={styles.btn} onPress={() => {}}>
          Cadastrar produtos
        </Button>
        <Button style={styles.btn} onPress={() => {}}>
          Listar produtos
        </Button>
      </View>
    </SafeAreaView>
  );
};

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

export default HomeScreen;
