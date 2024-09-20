import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  Home: undefined;
  Cadastro: undefined;
};
export type HomeScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  "Home",
  "Cadastro"
>;
export type Props = {
  navigation: HomeScreenNavigationProps;
};
