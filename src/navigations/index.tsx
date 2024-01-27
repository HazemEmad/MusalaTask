import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React, {useCallback} from 'react';

import {useTranslation} from 'react-i18next';
import {StyleSheet} from 'react-native';
import TabBarLabel from '../components/common/TabBarLabel';
import Settings from '../screens/Settings';
import {fs} from '../utils/layouts';
import HomeStack from './HomeStack';
import {MAIN_NAV} from '../utils/constants';

const Tab = createBottomTabNavigator();
const AppNavigation = () => {
  const {t} = useTranslation();

  const renderTabBar = useCallback(
    (title: string) => <TabBarLabel title={title} />,
    [],
  );

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarIconStyle: style.iconStyle,
          tabBarLabelPosition: 'beside-icon',
          tabBarLabelStyle: style.labelStyle,
        }}>
        <Tab.Screen
          name={MAIN_NAV.homeStack}
          component={HomeStack}
          options={{
            tabBarLabel: () => renderTabBar(t('home.title')),
            header: () => null,
          }}
        />
        <Tab.Screen
          name={MAIN_NAV.settings}
          component={Settings}
          options={{
            tabBarLabel: () => renderTabBar(t('settings.title')),
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
