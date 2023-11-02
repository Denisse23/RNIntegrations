import React from 'react';
import BaseNavigation from '@navigation/BaseNavigation';
import { store } from '@state/store';
import CustomThemeProvider from '@theme/CustomThemeProvider';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <CustomThemeProvider>
        <BaseNavigation />
      </CustomThemeProvider>
    </Provider>
  );
};

export default App;
