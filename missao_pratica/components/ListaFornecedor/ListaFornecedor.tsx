import React, { useEffect } from "react";
import Styles from "./ListaFornecedorStyles";
import { FlatList, SafeAreaView, View, Text, StyleSheet } from "react-native";
import { useFornecedores } from "../../hooks/useFornecedores";
import { ActivityIndicator, Button } from "react-native-paper";
import CardFornecedor from "../CardFornecedor/CardFornecedor";
import { Props } from "../../utils/Props";

const ListaFornecedores: React.FC<Props> = ({ navigation }) => {
  const { fornecedores, isLoading, errorMessage, findFornecedores } =
    useFornecedores();
  useEffect(() => {
    findFornecedores();
  }, []);

  if (isLoading) {
    return <ActivityIndicator size="large" color="#A594F9" />;
  }

  if (errorMessage) {
    return (
      <View>
        <Text>{errorMessage}</Text>
      </View>
    );
  }
  return (
    <SafeAreaView style={Styles.container}>
      <Button
        onPress={() => {
          navigation.navigate("Cadastro");
        }}
        style={styles.btn}>
        Cadastrar Fornecedor
      </Button>
      <FlatList
        data={fornecedores}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <CardFornecedor fornecedor={item} />}
      />
    </SafeAreaView>
  );
};

export default ListaFornecedores;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  btn: {
    width: 300,
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
});
