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
import { View, Image } from "react-native";
import { useState } from "react";
import Styles from "./ImagePickerStyles";

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
      <View style={Styles.view}>
        {imagemUri ? (
          <Image source={{ uri: imagemUri }} style={Styles.image} />
        ) : (
          <Text>Imagem não selecionada!!</Text>
        )}
      </View>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={Styles.modal}>
          <Text>Selecione uma foto</Text>
          <Button mode="contained" onPress={takePhoto} style={Styles.button}>
            <Icon size={20} source="camera" color={MD3Colors.error50} />
          </Button>
          <Text>Escolha da galeria</Text>
          <Button
            mode="contained"
            onPress={selectFromGalery}
            style={Styles.button}>
            <Icon size={20} source="galery" color={MD3Colors.error50} />
          </Button>
        </Modal>
      </Portal>
    </Provider>
  );
};

export default ImagePicker;
