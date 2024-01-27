import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import AppNavigation from './src/navigations';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import './src/localization/i18n';

function App(): React.JSX.Element {
  const queryClient = new QueryClient();
  return (
    <SafeAreaView style={style.container}>
      <QueryClientProvider client={queryClient}>
        <AppNavigation />
      </QueryClientProvider>
    </SafeAreaView>
  );
}
export default App;

const style = StyleSheet.create({container: {flex: 1}});
