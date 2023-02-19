import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '@hooks';
import AuthStackNavigator from './AuthStackNavigator';
import DrawerNavigator from './DrawerNavigator';

const BaseNavigation = () => {
  const { userIsAuthorized } = useAuth();

  return (
    <NavigationContainer>
      {
        userIsAuthorized ?
          <DrawerNavigator />
          :
          <AuthStackNavigator />
      }
    </NavigationContainer>
  );
};

export default BaseNavigation;
