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
import { useFornecedorContext } from "../../contexts/FornecedorContext";

const ImagePicker = forwardRef((props, ref) => {
  const [visible, setVisible] = useState<boolean>(false);
  const { handleTakeGalleryImage, uri } = useMedia();
  const { setFornecedorData } = useFornecedorContext();
  const [imageUri, setImageUri] = useState<string | null>(null);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  useImperativeHandle(ref, () => ({
    showModal,
    hideModal,
  }));

  const handleImageSelect = async () => {
    const imageUri = await handleTakeGalleryImage();
    if (imageUri) {
      setImageUri(uri);
      setFornecedorData((prev) => ({ ...prev, imagem: imageUri }));
      hideModal();
    }
  };

  return (
    <Provider>
      <View style={Styles.view}>
        {uri ? (
          <View>
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
                <Button mode="contained-tonal" onPress={handleImageSelect}>
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
