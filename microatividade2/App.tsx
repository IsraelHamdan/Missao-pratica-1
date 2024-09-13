import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { TextInput } from "react-native-paper";

const MyComponent = () => {
  const [text, setText] = useState("");
  const [transform, setTransform] = useState("");

  const handleTransform = (text: string) => {
    const transformedMensage = text
      .split("")
      .map(() => "🍕")
      .join("");
    return transformedMensage;
  };
  const handleTransformText = () => {
    setTransform(handleTransform(text));
    console.log("transformei");
  };
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(text) => setText(text)}
        label={"Digite uma frase"}
        style={styles.input}
        value={text}
      />
      <Button title="Transformar" onPress={handleTransformText} />
      <Text style={styles.text}>{transform}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 30,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },
  text: {
    height: 16,
    padding: 10,
    margin: 10,
    gap: 1,
  },
});

export default MyComponent;
