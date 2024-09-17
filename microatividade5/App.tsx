import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
} from "react-native";

interface imgData {
  id: number;
  nome: string;
  uri: string;
}
export default function App() {
  const logoSource: imgData[] = [
    {
      id: 1,
      nome: "tinyLogo",
      uri: "@expo/snack-static/react-native/react-native-logo.png",
    },
    {
      id: 2,
      nome: "logo",
      uri: "https://reactnative.dev/img/tiny_logo.png",
    },
    {
      id: 3,
      nome: "unknow",
      uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==",
    },
  ];

  const renderItem = ({ item }: { item: imgData }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.nome}</Text>
      <Image style={[styles.logo]} source={{ uri: item.uri }} />
    </View>
  );
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <FlatList
          data={logoSource}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={[styles.list]}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    justifyContent: "center",
    alignItems: "center",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  itemName: {
    fontSize: 18,
    marginRight: 10,
  },
  logo: {
    width: 50,
    height: 50,
  },
  stretch: {
    width: 50,

    height: 200,

    resizeMode: "stretch",
  },
});
