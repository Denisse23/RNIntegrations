import React from 'react';
import RootNavigation from '@navigation/RootNavigation';
import CustomThemeProvider from '@theme/CustomThemeProvider';

const App = () => {
  return (
    <CustomThemeProvider>
      <RootNavigation />
    </CustomThemeProvider>
  );
};

export default App;
