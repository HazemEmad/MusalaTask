import React, {FC, memo} from 'react';
import {ActivityIndicator} from 'react-native';

const Loader: FC<{loading: boolean}> = ({loading}) => {
  return loading ? <ActivityIndicator testID="loader" /> : null;
};

export default memo(Loader);
