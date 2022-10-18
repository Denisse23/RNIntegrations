import {
  DarkTheme as DefaultDarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import lightColors from './LightColors';
import darkColors from './DarkColors';

const ColorScheme = {
  LIGHT: 'light',
  DARK: 'dark',
};

const LightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...lightColors,
    textColor: lightColors.text300,
  },
};

const DarkTheme = {
  ...DefaultDarkTheme,
  colors: {
    ...DefaultDarkTheme.colors,
    ...darkColors,
    textColor: darkColors.text300,
  },
};

export { ColorScheme, LightTheme, DarkTheme };
