import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  Home: undefined;
  Cadastro: undefined;
  Lista: undefined;
};
export type RootStackNavigationProps = StackNavigationProp<RootStackParamList>;
export type Props = {
  navigation: RootStackNavigationProps;
};
