import {
  Button,
  Icon,
  Modal,
  Portal,
  Provider,
  Text,
} from "react-native-paper";
import { View, Image, Alert } from "react-native";
import { useState, forwardRef, useImperativeHandle } from "react";
import Styles from "./ImagePickerStyles";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import useMedia from "../../hooks/useMedia";

const ImagePicker = forwardRef((props, ref) => {
  const [visible, setVisible] = useState<boolean>(false);
  const { handleTakeGalleryImage, uri } = useMedia();
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  useImperativeHandle(ref, () => ({
    showModal,
    hideModal,
  }));

  return (
    <Provider>
      <Button>
        <Icon size={20} source="image" />
      </Button>
      <View style={Styles.view}>
        {uri ? (
          <Image source={{ uri }} style={Styles.image} />
        ) : (
          <Text>Imagem não selecionada!!</Text>
        )}
      </View>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={Styles.modal}>
          {/* <Text>Selecione uma foto</Text>
          <Button
            mode="contained"
            onPress={handleTakePhoto}
            style={Styles.button}>
            <MaterialIcons name="camera-alt" size={24} color={"#A594F9"} />
          </Button> */}
          <Text>Escolha da galeria</Text>
          <Button
            mode="contained"
            onPress={handleTakeGalleryImage}
            style={Styles.button}>
            <Ionicons size={24} color={"#A594F9"} name="image" />
          </Button>
        </Modal>
      </Portal>
    </Provider>
  );
});

export default ImagePicker;
