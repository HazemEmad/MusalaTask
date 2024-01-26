import React, {FC, memo} from 'react';
import {Text} from 'react-native';

const Empty: FC<{loading: boolean}> = ({loading}) => {
  return !loading ? <Text>You Don't have any Posts</Text> : null;
};

export default memo(Empty);
