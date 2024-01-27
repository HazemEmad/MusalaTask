import React, {FC, memo} from 'react';
import {Text} from 'react-native';

const TabBarLabel: FC<{title: string}> = ({title}) => {
  return <Text> {title}</Text>;
};

export default memo(TabBarLabel);
