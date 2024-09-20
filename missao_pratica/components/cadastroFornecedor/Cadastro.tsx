import React, { useRef, useEffect, useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { useFornecedores, Fornecedor } from "../../hooks/useFornecedores";
import { Button, TextInput } from "react-native-paper";
import ImagePicker from "../ImagePicker/ImagePicker";
const Cadastro = () => {
  const [nome, setNome] = useState<string>("");
  const [cnpj, setCnpj] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [telefone, setTelefone] = useState<string>("");
  const [imagem, setImagem] = useState<string>("");

  const imagePickerRef = useRef<{ showModal: () => void } | null>(null);

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

  const handlePostFornecedor = async () => {
    const novoFornecedor: Fornecedor = {
      nome,
      email,
      telefone,
      cnpj,
    };
    try {
      await postFornecedoresOnJSON(novoFornecedor);
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
        <Button onPress={() => imagePickerRef.current?.showModal()}>
          <ImagePicker />
        </Button>
        <Button style={styles.btn} onPress={handlePostFornecedor}>
          Cadastrar fornecedor
        </Button>
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
    fontFamily: "JosefinSans_400Regular",
  },
  textInput: {
    backgroundColor: "#F5EFFF",
    color: "#000000",
    gap: 1.5,
  },
  btn: {},
});

export default Cadastro;
