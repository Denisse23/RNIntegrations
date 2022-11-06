import {
  DarkTheme as DefaultDarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import lightColors from './LightColors';
import darkColors from './DarkColors';
import FontSizes from './FontSizes';

const ColorScheme = {
  LIGHT: 'light',
  DARK: 'dark',
};

const generalTheme = {
  fontSizes: FontSizes,
};

const LightTheme = {
  ...DefaultTheme,
  ...generalTheme,
  colors: lightColors,
};

const DarkTheme = {
  ...DefaultDarkTheme,
  ...generalTheme,
  colors: darkColors,
};

export type ThemeType = typeof LightTheme;

export { ColorScheme, LightTheme, DarkTheme };
