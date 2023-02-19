import { StackNavigationProp } from '@react-navigation/stack';

/* Screen Params Definition */

export type AuthStackParamsList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
}

export type DrawerParamsList = {
  AppStackNavigator: undefined;
}

export type AppStackParamsList = {
  BottomTabsNavigator: undefined;
  HomeScreen: undefined;
}

export type BaseStackParamsList = AuthStackParamsList & AppStackParamsList;

export type NavigationType = StackNavigationProp<BaseStackParamsList>;

/* Screens components type definition */

export type AuthScreensComponent = {
  name: keyof AuthStackParamsList;
  component: React.ComponentType<any>;
};

export type BottomTabsScreensComponent = {
  name: keyof AppStackParamsList;
  component: React.ComponentType<any>;
  title: string;
};

export type AppMainScreensComponent = {
  name: keyof AppStackParamsList;
  component: React.ComponentType<any>;
};

