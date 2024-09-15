import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const logoURI = "https://reactnative.dev/img/tiny_logo.png";

export default function App() {
  const logoCount = 6;
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <Text style={styles.text}>Scroll me</Text>
      <View>
        {Array.from({ length: logoCount }).map((_, index) => (
          <Image key={index} source={{ uri: logoURI }} style={styles.logo} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 96,
  },
  logo: {
    width: 64,
    height: 64,
    margin: 5,
  },
});
