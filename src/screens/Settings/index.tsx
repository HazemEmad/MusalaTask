import React, {memo} from 'react';

import {StyleSheet, View} from 'react-native';

function Settings(): React.JSX.Element {
  return <View style={style.container} />;
}
export default memo(Settings);

const style = StyleSheet.create({container: {flex: 1}});
