import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {fs} from '../utils/layouts';
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import {StyleSheet, Text} from 'react-native';
import {useTranslation} from 'react-i18next';

const Tab = createBottomTabNavigator();
const AppNavigation = () => {
  const {t} = useTranslation();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarIconStyle: style.iconStyle,
          tabBarLabelPosition: 'beside-icon',
          tabBarLabelStyle: style.labelStyle,
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: () => <Text> {t('home.title')}</Text>,
            headerTitle: t('home.title'),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarLabel: () => <Text> {t('settings.title')}</Text>,
            headerTitle: t('settings.title'),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigation;

const style = StyleSheet.create({
  iconStyle: {display: 'none'},
  labelStyle: {fontSize: fs(15)},
});
