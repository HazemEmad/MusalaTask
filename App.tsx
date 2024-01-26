import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import AppNavigation from './src/navigations';
import './src/localization/i18n';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={style.container}>
      <AppNavigation />
    </SafeAreaView>
  );
}
export default App;

const style = StyleSheet.create({container: {flex: 1}});
