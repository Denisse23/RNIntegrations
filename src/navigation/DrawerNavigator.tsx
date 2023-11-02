import React from 'react';
import { useTheme } from '@emotion/react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerStyle } from '@styles/ScreenOptions';
import AppStackNavigator from './AppStackNavigator';
import { DrawerParamsList } from './types';

const Drawer = createDrawerNavigator<DrawerParamsList>();

const DrawerNavigator = () => {
  const theme = useTheme();

  return (
    <Drawer.Navigator
      initialRouteName="AppStackNavigator"
      screenOptions={{ ...DrawerStyle(theme) }}>
      <Drawer.Screen name="AppStackNavigator" component={AppStackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
