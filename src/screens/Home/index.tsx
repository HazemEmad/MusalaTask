import React, {memo} from 'react';

import {StyleSheet, View} from 'react-native';

function Home(): React.JSX.Element {
  return <View style={style.container} />;
}
export default memo(Home);

const style = StyleSheet.create({container: {flex: 1}});
