import React from 'react';
import { Provider } from 'react-redux'
import BaseNavigation from '@navigation/BaseNavigation';
import CustomThemeProvider from '@theme/CustomThemeProvider';
import { store } from '@state/store';

const App = () => {
  return (
    <Provider store={store} >
      <CustomThemeProvider>
        <BaseNavigation />
      </CustomThemeProvider>
    </Provider>
  );
};

export default App;
