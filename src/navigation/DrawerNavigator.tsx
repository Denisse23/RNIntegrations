import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppStackNavigator from './AppStackNavigator';
import { DrawerStyle } from '@styles/ScreenOptions';
import { DrawerParamsList } from './types';

const Drawer = createDrawerNavigator<DrawerParamsList>();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            initialRouteName="AppStackNavigator"
            screenOptions={{ ...DrawerStyle }}>
            <Drawer.Screen name="AppStackNavigator" component={AppStackNavigator} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;