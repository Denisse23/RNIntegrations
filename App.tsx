import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { useColorScheme, View } from 'react-native';
import { ColorScheme, DarkTheme, LightTheme } from './src/theme/Themes';

const App = () => {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider
      theme={colorScheme === ColorScheme.DARK ? DarkTheme : LightTheme}
    >
      <View />
    </ThemeProvider>
  );
};

export default App;
