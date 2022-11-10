import { StackNavigationOptions } from '@react-navigation/stack';
import { ThemeType } from '@theme/Themes';

export const ScreenStyle = (theme: ThemeType): StackNavigationOptions => {
  return {
    headerShown: false,
    cardStyle: {
      backgroundColor: theme.colors.background100,
    },
  };
};
