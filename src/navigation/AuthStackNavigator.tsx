import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from '@emotion/react';
import { LoginScreen } from '@components/templates';
import { ScreenStyle } from '@styles/ScreenOptions';
import { RootStackParamsList } from './types';

const Stack = createStackNavigator<RootStackParamsList>();

const AuthStackNavigator = () => {
  const theme = useTheme();

  return (
    <Stack.Navigator screenOptions={ScreenStyle(theme)}>
      <Stack.Screen
        key={'LoginScreen'}
        name={'LoginScreen'}
        component={LoginScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
