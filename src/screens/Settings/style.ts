import {fs, pxW} from '@utils/layouts';
import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {flex: 1, padding: pxW(25)},
  textStyle: {
    fontWeight: 'bold',
    fontSize: fs(18),
    alignSelf: 'flex-start',
  },
});
