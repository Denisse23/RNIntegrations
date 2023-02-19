import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useTheme } from '@emotion/react';
import AppStackNavigator from './AppStackNavigator';
import { DrawerStyle } from '@styles/ScreenOptions';
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