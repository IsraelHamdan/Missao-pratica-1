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
            {!visible ? (
              <View style={Styles.btn}>
                <Icon size={50} source="image" color="#A594F9" />
                <Text style={Styles.textBtn}>Escolha uma imagem</Text>
              </View>
            ) : (
              <Modal
                visible={visible}
                onDismiss={hideModal}
                contentContainerStyle={Styles.modal}>
                <Text>Escolha da galeria</Text>
                <Button mode="contained-tonal" onPress={handleTakeGalleryImage}>
                  <View style={Styles.icons}>
                    <Ionicons size={48} color={"#A594F9"} name="image" />
                  </View>
                </Button>
              </Modal>
            )}
          </Portal>
        )}
      </View>
    </Provider>
  );
});

export default ImagePicker;
