import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthSelectors } from '@state/auth/authSlice';
import { useAuth } from '@hooks';
import AuthStackNavigator from './AuthStackNavigator';
import DrawerNavigator from './DrawerNavigator';

const BaseNavigation = () => {
  const { userIsAuthorized } = useAuth();

  return (
    <NavigationContainer>
      {/* {
        userIsAuthorized ?*/}
      <AuthStackNavigator />
      {/* <DrawerNavigator /> */}
      {/* } */}
    </NavigationContainer>
  );
};

export default BaseNavigation;
