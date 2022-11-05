import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { useColorScheme } from 'react-native';
import RootNavigation from '@navigation/RootNavigation';
import { ColorScheme, DarkTheme, LightTheme } from './src/theme/Themes';

const App = () => {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider
      theme={colorScheme === ColorScheme.DARK ? DarkTheme : LightTheme}
    >
      <RootNavigation />
    </ThemeProvider>
  );
};

export default App;
