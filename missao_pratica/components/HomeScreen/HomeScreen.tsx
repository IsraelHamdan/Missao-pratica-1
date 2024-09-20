import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { Text, Button } from "react-native-paper";
import Styles from "./HomeScreenStyles";
import { StackNavigationProp } from "@react-navigation/stack";
import { Props } from "../../utils/Props";
const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={Styles.continer}>
      <View style={Styles.titleView}>
        <Text style={Styles.h1}>Meeting</Text>
      </View>
      <View style={Styles.btnView}>
        <Button
          style={Styles.btn}
          onPress={() => navigation.navigate("Cadastro")}>
          Cadastrar fornecedor
        </Button>
        <Button style={Styles.btn} onPress={() => {}}>
          Listar fornecedores
        </Button>
        {/* <Button style={Styles.btn} onPress={() => {}}>
          Cadastrar produtos
        </Button>
        <Button style={Styles.btn} onPress={() => {}}>
          Listar produtos
        </Button> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
