import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  card: {
    flexDirection: "row", // Alinha imagem e texto lado a lado
    padding: 20,
    marginVertical: 10,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "rgba(165, 148, 249, 1)",
    elevation: 10,
    alignItems: "center",
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  cardsInfoRow: {
    flexDirection: "row",
    marginBottom: 5,
  },
  cardInfo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#A594F9",
    width: 80,
  },
  cardInfoText: {
    fontSize: 16,
    flexShrink: 1,
  },
});

export default Styles;
