import React, {FC, memo} from 'react';
import {Image, ImageStyle, StyleProp} from 'react-native';

const AppImage: FC<{uri: string; style?: StyleProp<ImageStyle>}> = ({
  uri,
  style,
}) => {
  return (
    <Image
      style={style}
      source={{uri}}
      defaultSource={require('@assets/images/placeholderImage.png')}
    />
  );
};
export default memo(AppImage);
