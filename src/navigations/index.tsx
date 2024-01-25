import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {fs} from '../utils/layouts';
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import {StyleSheet} from 'react-native';

const Tab = createBottomTabNavigator();
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarIconStyle: style.iconStyle,
          tabBarLabelPosition: 'beside-icon',
          tabBarLabelStyle: style.labelStyle,
        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigation;

const style = StyleSheet.create({
  iconStyle: {display: 'none'},
  labelStyle: {fontSize: fs(15)},
});
