import {Dimensions, PixelRatio} from 'react-native';

export const {width, height} = Dimensions.get('window');

const designWidth = 375;
const designHeight = 667;

export const fs = (fontSize: number) => {
  const ratio = PixelRatio.getFontScale();
  return fontSize * ratio;
};
export const pxW = (value: number) => {
  const ratio = width / designWidth;
  return PixelRatio.roundToNearestPixel(value * ratio);
};
export const pxH = (value: number) => {
  const ratio = height / designHeight;
  return PixelRatio.roundToNearestPixel(value * ratio);
};
