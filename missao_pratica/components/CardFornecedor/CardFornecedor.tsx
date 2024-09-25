import { BlurView } from "@react-native-community/blur";
import Styles from "./CardFornecedorStyles";
import React from "react";
import { View, Image, Text } from "react-native";
import { Fornecedor } from "../../hooks/useFornecedores";

interface CardFornecedorProps {
  fornecedor: Fornecedor;
}

const CardFornecedor: React.FC<CardFornecedorProps> = ({ fornecedor }) => {
  return (
    <View style={Styles.card}>
      <Image style={Styles.cardImage} source={{ uri: fornecedor.imagem }} />
      <View style={Styles.textContainer}>
        <View style={Styles.cardsInfoRow}>
          <Text style={Styles.cardInfo}>Nome: </Text>
          <Text style={Styles.cardInfoText}>{fornecedor.nome}</Text>
        </View>
        <View style={Styles.cardsInfoRow}>
          <Text style={Styles.cardInfo}>CNPJ: </Text>
          <Text style={Styles.cardInfoText}>{fornecedor.cnpj}</Text>
        </View>
        <View style={Styles.cardsInfoRow}>
          <Text style={Styles.cardInfo}>Email: </Text>
          <Text style={Styles.cardInfoText}>{fornecedor.email}</Text>
        </View>
        <View style={Styles.cardsInfoRow}>
          <Text style={Styles.cardInfo}>Telefone: </Text>
          <Text style={Styles.cardInfoText}>{fornecedor.telefone}</Text>
        </View>
      </View>
    </View>
  );
};

export default CardFornecedor;
