import React, { useRef, useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useFornecedores, Fornecedor } from "../../hooks/useFornecedores";
import { TextInput } from "react-native-paper";
import ImagePicker from "../ImagePicker/ImagePicker";
import Styles from "./CadastroStyles";
import { Props } from "../../utils/Props";
import { useFornecedorContext } from "../../contexts/FornecedorContext";

type ImagePickerHandle = {
  showModal: () => void;
  hideModal: () => void;
};

const Cadastro: React.FC<Props> = ({ navigation }) => {
  const [nome, setNome] = useState<string>("");
  const [cnpj, setCnpj] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [telefone, setTelefone] = useState<string>("");
  const [imagem, setImagem] = useState<string>("");
  const [endereco, setEndereco] = useState<string>("");
  const [categorias, setCategorias] = useState<string[]>([]);
  const imagePickerRef = useRef<ImagePickerHandle>(null);
  const { fornecedorData, updateFornecedorData } = useFornecedorContext();

  const {
    fornecedores,
    isLoading,
    errorMessage,
    findFornecedores,
    handleSaveFornecedor,
  } = useFornecedores();

  useEffect(() => {
    findFornecedores();
  }, []);

  const handleAddCategories = (text: string) => {
    const categoryArray = text
      .split(",")
      .map((category) => category.trim())
      .filter((category) => category !== "");
    const uniqueCategories = [...new Set(categoryArray)];
    if (Array.isArray(categoryArray)) {
      updateFornecedorData({
        categorias: uniqueCategories,
      });
    }
  };
  const handlePostFornecedor = async () => {
    const novoFornecedor: Partial<Fornecedor> = {
      nome,
      email,
      cnpj,
      telefone,
      endereco,
    };
    try {
      await handleSaveFornecedor(novoFornecedor);
      navigation.navigate("Home");
    } catch (errorMessage) {
      console.error(errorMessage);
    }
  };

  const handleCategoriasChange = (text: string) => {
    const newCategorias = text.split("");
    setCategorias(newCategorias);
  };

  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView>
        <Text style={Styles.title}>Cadastre o fornecedor</Text>
        <View>
          <TextInput
            label="nome"
            value={nome}
            onChangeText={setNome}
            placeholder="Digite o nome do fornecedor"
            outlineColor="#A594F9"
            activeOutlineColor="#CDC1FF"
            textColor="black"
            placeholderTextColor="black"
            style={Styles.textInput}
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
            style={Styles.textInput}
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
            style={Styles.textInput}
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
            style={Styles.textInput}
          />
          <TextInput
            label="endereco"
            value={endereco}
            onChangeText={setEndereco}
            placeholder="Digite o endereco do fornecedor"
            outlineColor="#A594F9"
            activeOutlineColor="#CDC1FF"
            textColor="black"
            placeholderTextColor="black"
            style={Styles.textInput}
          />
          <TextInput
            label="categorias"
            onChangeText={handleAddCategories}
            placeholder="Digite o categorias do fornecedor"
            outlineColor="#A594F9"
            activeOutlineColor="#CDC1FF"
            textColor="black"
            placeholderTextColor="black"
            style={Styles.textInput}
          />
          <TouchableOpacity
            style={Styles.btnPhoto}
            onPress={() => imagePickerRef.current?.showModal()}>
            <ImagePicker ref={imagePickerRef} />
          </TouchableOpacity>
          <View>
            <TouchableOpacity style={Styles.btn} onPress={handlePostFornecedor}>
              <Text style={Styles.btnText}>Cadastrar fornecedor</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cadastro;
