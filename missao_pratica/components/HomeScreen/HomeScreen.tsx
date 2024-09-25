import React from "react";
import { View, SafeAreaView } from "react-native";
import { Text, Button } from "react-native-paper";
import Styles from "./HomeScreenStyles";
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
          <Text style={Styles.textBtn}>Cadastrar fornecedor</Text>
        </Button>
        <Button
          style={Styles.btn}
          onPress={() => {
            navigation.navigate("Lista");
          }}>
          <Text style={Styles.textBtn}>Listar fornecedores</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
