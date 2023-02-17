import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from '@emotion/react';
import { AUTH_SCREENS } from '@constants';
import { ScreenStyle } from '@styles/ScreenOptions';
import { AuthStackParamsList } from './types';

const Stack = createStackNavigator<AuthStackParamsList>();

const AuthStackNavigator = () => {
  const theme = useTheme();

  return (
    <Stack.Navigator screenOptions={ScreenStyle(theme)}>
      {AUTH_SCREENS.map(screen => {
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

export default AuthStackNavigator;
