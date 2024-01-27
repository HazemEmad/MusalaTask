import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from '../../screens/Home';
import Details from '../../screens/Details';
import {useTranslation} from 'react-i18next';
import {HOME_STACK_NAV} from '../../utils/constants';

const Stack = createStackNavigator();
const HomeStack = () => {
  const [t] = useTranslation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={HOME_STACK_NAV.home}
        component={Home}
        options={{
          headerTitle: t('home.title'),
        }}
      />
      <Stack.Screen
        name={HOME_STACK_NAV.details}
        component={Details}
        options={{
          headerTitle: t('details.title'),
        }}
      />
    </Stack.Navigator>
  );
};
export default HomeStack;
