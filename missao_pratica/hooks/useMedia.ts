import { useState } from "react";
import { Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
//TO-DO: Criar lógica para permitir o usuário tirar fotos com a câmera do dispositivo!

// requisita acesso a galeria!
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
    return { granted: false };
  }
};
// seleciona a imagem da galeria e retorna o endereço dela
const selectImageFromGallery = async () => {
  const permission = await requestPermissionToAcessGallery();
  if (!permission?.granted) {
    Alert.alert(
      "Permissão negada",
      "Precisamos de permissão para acessar sua galeria!"
    );
    return null;
  }
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [6, 5],
    quality: 1,
  });
  return result.canceled ? null : result.assets[0].uri;
};
// converte a imagem para base64
const convertBase64 = async (uri: string): Promise<string | null> => {
  try {
    const base64 = await FileSystem.readAsStringAsync(uri, {
      encoding: FileSystem.EncodingType.Base64,
    });
    const imageConverted: string = `data:image/jpeg;base64,${base64}`;
    return imageConverted;
  } catch (e) {
    console.error(`Erro ao converter a imagem para Base64: ${e}`);
    return null;
  }
};
// salva a imagem convertida no dispositivo!
const saveImageToDevice = async (
  imageConverted: string
): Promise<string | null> => {
  const fileName = `image_${Date.now()}.jpg`;
  const fileURI = `${FileSystem.documentDirectory}${fileName}`;
  try {
    await FileSystem.writeAsStringAsync(fileURI, imageConverted.split(",")[1], {
      encoding: FileSystem.EncodingType.Base64,
    });
    console.log(`Imagem salva com sucesso: ${fileURI}`);
    return fileURI;
  } catch (err) {
    console.error(`Erro ao salvar a imagem no dispositivo: ${err}`);
    return null;
  }
};

const useMedia = () => {
  const [uri, setUri] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleTakeGalleryImage = async () => {
    try {
      const selectedUri = await selectImageFromGallery();
      if (!selectedUri) {
        return;
      }
      setUri(selectedUri);

      const base64Image = await convertBase64(selectedUri);
      if (!base64Image) {
        return;
      }
      const savedFileUri = await saveImageToDevice(base64Image);
      if (!savedFileUri) {
        console.error("Erro ao salvar a imagem");
      } else {
        console.log(`Imagem salva em ${saveImageToDevice}`);
        return savedFileUri;
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
