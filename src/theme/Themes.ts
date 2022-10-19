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
  colors: lightColors,
};

const DarkTheme = {
  ...DefaultDarkTheme,
  colors: darkColors,
};

export { ColorScheme, LightTheme, DarkTheme };
