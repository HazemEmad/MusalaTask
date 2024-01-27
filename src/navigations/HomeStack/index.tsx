import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {useTranslation} from 'react-i18next';
import Details from '@screens/Details';
import Home from '@screens/Home';
import {HomeStackParamList} from './types/HomeStack.type';

const Stack = createStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  const [t] = useTranslation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Home'}
        component={Home as React.ComponentType}
        options={{
          headerTitle: t('home.title'),
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name={'Details'}
        component={Details}
        options={{
          headerTitle: t('details.title'),
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
