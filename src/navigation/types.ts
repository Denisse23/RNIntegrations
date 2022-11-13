import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamsList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
};

export type NavigationType = StackNavigationProp<RootStackParamsList>;
