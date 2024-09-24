import { useState } from "react";
import { Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";

//TO-DO: Criar lógica para permitir o usuário tirar fotos com a câmera do dispositivo!

const requestPermissionToAcessGallery = async () => {
  try {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status != "granted") {
      Alert.alert(
        "Permissão negada, precisamos de permissão para acessar sua galeria"
      );
    } else {
      return { granted: status === "granted" };
    }
  } catch (error) {
    console.log("🚀 ~ requestPermissionToAcessGallery ~ error:", error);
  }
};
const convertBase64 = async (uri: string) => {
  try {
    const base64 = await FileSystem.readAsStringAsync(uri, {
      encoding: FileSystem.EncodingType.Base64,
    });
    return `data:image/jpeg;base64,${base64}`;
  } catch (e) {
    console.error(`Erro ao converter a imagem para Base64: ${e}`);
  }
};
const useMedia = () => {
  const [uri, setUri] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleTakeGalleryImage = async () => {
    try {
      const permission = await requestPermissionToAcessGallery();
      if (permission && permission.granted) {
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });

        if (!result.canceled) {
          const selectedUri = result.assets[0].uri;
          setUri(selectedUri);
          const base64Image = await convertBase64(selectedUri);
          return base64Image;
        }
      } else {
        Alert.alert(
          "Permissão negada, precisamos de permissão para acessar sua galeria!!"
        );
      }
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Erro descnhecido";
      setError(errorMessage);
    }
  };

  return { uri, error, handleTakeGalleryImage };
};

export default useMedia;
