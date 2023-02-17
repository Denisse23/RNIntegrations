import { StackNavigationOptions } from '@react-navigation/stack';
import { DrawerNavigationOptions } from '@react-navigation/drawer';
import { ThemeType } from '@theme/Themes';
import { windowWidth } from '@utils/Scale';

export const ScreenStyle = (theme: ThemeType): StackNavigationOptions => {
  return {
    headerShown: false,
    cardStyle: {
      backgroundColor: theme.colors.background100,
    },
  };
};

export const DrawerStyle = (theme: ThemeType): DrawerNavigationOptions => {
  return {
    headerShown: false,
    drawerStyle: {
      width: windowWidth,
    },
  };
};
