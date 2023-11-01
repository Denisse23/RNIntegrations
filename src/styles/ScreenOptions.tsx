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
    headerShown: ScreenStyle(theme).headerShown,
    drawerStyle: {
      width: windowWidth,
    },
  };
};

export const BottomTabsStyle = (theme: ThemeType) => {
  return {
    headerShown: ScreenStyle(theme).headerShown,
    tabBarActiveTintColor: theme.colors.background400,
    tabBarInactiveTintColor: theme.colors.background100,
    tabBarStyle: {
      backgroundColor: theme.colors.background300,
    },
  };
};
