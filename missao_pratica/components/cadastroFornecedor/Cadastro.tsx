import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { useFornecedores, Fornecedor } from "../../hooks/useFornecedores";
import { useEffect, useState } from "react";
import { ActivityIndicator, MD2Colors, TextInput } from "react-native-paper";

const cadastro = () => {
  const [nome, setNome] = useState<string>("");
  const [cnpj, setCnpj] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [telefone, setTelefone] = useState<string>("");
  const [produtos, setProdutos] = useState<string[]>([]);
  const [imagem, setImagem] = useState<string>("");

  const {
    fornecedores,
    isLoading,
    errorMessage,
    findFornecedores,
    postFornecedoresOnJSON,
  } = useFornecedores();

  useEffect(() => {
    findFornecedores();
  }, []);

  const handlePostFornecedor = () => {
    const novoFornecedor: Fornecedor = {
      nome,
      email,
      telefone,
      cnpj,
      produtos: [],
      imagem,
    };
    try {
      postFornecedoresOnJSON(novoFornecedor);
    } catch (errorMessage) {
      console.error(errorMessage);
    }
  };
  return (
    <View style={styles.container}>
      <Text>Cadastre o fornecedor</Text>
      <SafeAreaView>
        <TextInput
          label="nome"
          value={nome}
          onChangeText={setNome}
          placeholder="Digite o nome do fornecedor"
          outlineColor="#A594F9"
          activeOutlineColor="#CDC1FF"
          textColor="black"
          placeholderTextColor="black"
          style={styles.textInput}
        />
        <TextInput
          label="cnpj"
          value={cnpj}
          onChangeText={setCnpj}
          placeholder="Digite o CNPJ do fornecedor"
          outlineColor="#A594F9"
          activeOutlineColor="#CDC1FF"
          textColor="black"
          placeholderTextColor="black"
          style={styles.textInput}
        />
        <TextInput
          label="email"
          value={email}
          onChangeText={setEmail}
          placeholder="Digite o email do fornecedor"
          outlineColor="#A594F9"
          activeOutlineColor="#CDC1FF"
          textColor="black"
          placeholderTextColor="black"
          style={styles.textInput}
        />
        <TextInput
          label="telefone"
          value={telefone}
          onChangeText={setTelefone}
          placeholder="Digite o telefone do fornecedor"
          outlineColor="#A594F9"
          activeOutlineColor="#CDC1FF"
          textColor="black"
          placeholderTextColor="black"
          style={styles.textInput}
        />
        <TextInput
          label="imagem"
          value={imagem}
          onChangeText={setImagem}
          placeholder="Digite o imagem do fornecedor"
          outlineColor="#A594F9"
          activeOutlineColor="#CDC1FF"
          textColor="black"
          placeholderTextColor="black"
          style={styles.textInput}
        />
      </SafeAreaView>

      <StatusBar />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {},
});

export default cadastro;
