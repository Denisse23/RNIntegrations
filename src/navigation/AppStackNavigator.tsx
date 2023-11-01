import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from '@emotion/react';
import { ScreenStyle } from '@styles/ScreenOptions';
import { APP_MAIN_SCREENS } from '@constants';
import { BaseStackParamsList } from './types';

const Stack = createStackNavigator<BaseStackParamsList>();

const AppStackNavigator = () => {
  const theme = useTheme();

  return (
    <Stack.Navigator
      screenOptions={ScreenStyle(theme)}
      initialRouteName="BottomTabsNavigator">
      {APP_MAIN_SCREENS.map(screen => {
        return (
          <Stack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default AppStackNavigator;
