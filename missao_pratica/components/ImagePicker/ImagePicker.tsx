import {
  Button,
  Icon,
  Modal,
  Portal,
  Provider,
  Text,
} from "react-native-paper";
import { View } from "react-native";
import { useState, forwardRef, useImperativeHandle } from "react";
import Styles from "./ImagePickerStyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import useMedia from "../../hooks/useMedia";
import Fontisto from "@expo/vector-icons/Fontisto";

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
      <View style={Styles.view}>
        {uri ? (
          <View style={Styles.icons}>
            <Ionicons size={100} color={"#A594F9"} name="checkmark-circle" />
          </View>
        ) : (
          <Portal>
            <Button>
              <Icon size={50} source="image" color="#A594F9" />
            </Button>
            <Modal
              visible={visible}
              onDismiss={hideModal}
              contentContainerStyle={Styles.modal}>
              <Text>Escolha da galeria</Text>
              <Button
                mode="contained"
                onPress={handleTakeGalleryImage}
                style={Styles.button}>
                <Ionicons size={48} color={"#A594F9"} name="image" />
              </Button>
            </Modal>
            <Button onPress={hideModal}>
              <Fontisto name="close-a" size={40} color="#D91656" />
            </Button>
          </Portal>
        )}
      </View>
    </Provider>
  );
});

export default ImagePicker;
