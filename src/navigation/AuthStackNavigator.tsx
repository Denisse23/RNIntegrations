import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '@components/templates';
import { RootStackParamsList } from './types';

const Stack = createStackNavigator<RootStackParamsList>();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        key={'LoginScreen'}
        name={'LoginScreen'}
        component={LoginScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
