import '@emotion/react';
import { LightTheme } from '@theme';

type ThemeType = typeof LightTheme;

declare module '@emotion/react' {
  export interface Theme extends ThemeType {
    colors: {
      primary500: string;
      background100: string;
      background200: string;
      background300: string;
      text100: string;
      text200: string;
      text300: string;
      success400: string;
      info400: string;
      warning400: string;
      danger400: string;
    };
  }
}
