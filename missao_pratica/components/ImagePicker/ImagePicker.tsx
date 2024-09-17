import {
  launchImageLibrary,
  launchCamera,
  MediaType,
  ImageLibraryOptions,
  CameraOptions,
} from "react-native-image-picker";
import {
  Button,
  Icon,
  MD3Colors,
  Modal,
  Portal,
  Provider,
  Text,
} from "react-native-paper";
import { View, Image, SafeAreaView, StyleSheet } from "react-native";
import { useState } from "react";

interface ImagePickerProps {
  onImageSelected: (uri: string) => void;
}

const ImagePicker = () => {
  const [imagemUri, setImagemUri] = useState<string | null>(null);
  const [visible, setVisible] = useState<boolean>(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const selectFromGalery = () => {
    const options: ImageLibraryOptions = {
      mediaType: "photo" as MediaType,
      maxHeight: 300,
      maxWidth: 300,
      quality: 1,
    };
    launchImageLibrary(options, (res) => {
      if (res.assets && res.assets.length > 0) {
        const uri = res.assets[0].uri;
        setImagemUri(uri ?? null);
        hideModal();
      }
    });
  };

  const takePhoto = () => {
    const options: CameraOptions = {
      mediaType: "photo" as MediaType,
      maxHeight: 300,
      maxWidth: 300,
      quality: 1,
    };
    launchCamera(options, (res) => {
      if (res.assets && res.assets.length > 0) {
        const uri = res.assets[0].uri;
        setImagemUri(uri ?? null);
        hideModal();
      }
    });
  };

  return (
    <Provider>
      <Button>
        <Icon size={20} source="image" />
      </Button>
      <View style={styles.view}>
        {imagemUri ? (
          <Image source={{ uri: imagemUri }} style={styles.image} />
        ) : (
          <Text>Imagem não selecionada!!</Text>
        )}
      </View>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={styles.modal}>
          <Text>Selecione uma foto</Text>
          <Button mode="contained" onPress={takePhoto} style={styles.button}>
            <Icon size={20} source="camera" color={MD3Colors.error50} />
          </Button>
          <Text>Escolha da galeria</Text>
          <Button
            mode="contained"
            onPress={selectFromGalery}
            style={styles.button}>
            <Icon size={20} source="galery" color={MD3Colors.error50} />
          </Button>
        </Modal>
      </Portal>
    </Provider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    alignItems: "center",
    marginVertical: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
  modal: {
    backgroundColor: "white",
    padding: 20,
  },
  button: {
    marginVertical: 10,
  },
});
