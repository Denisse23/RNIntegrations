import React from 'react';
import { useTheme } from '@emotion/react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabsStyle, ScreenStyle } from '@styles/ScreenOptions';
import { BOTTOM_TABS_SCREENS } from '@constants';

const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={BottomTabsStyle(theme)}
      sceneContainerStyle={ScreenStyle(theme).cardStyle}>
      {BOTTOM_TABS_SCREENS.map(screen => {
        return (
          <Tab.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={{ title: screen.title }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;
