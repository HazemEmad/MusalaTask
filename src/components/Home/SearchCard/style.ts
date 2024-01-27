import {I18nManager, StyleSheet} from 'react-native';
import {pxH, pxW} from '@utils/layouts';

export const style = StyleSheet.create({
  container: {
    margin: pxW(20),
    borderRadius: pxH(10),
    borderWidth: pxW(1),
    borderColor: '#6D7681',
    paddingHorizontal: pxW(15),
    paddingVertical: pxH(20),
    alignItems: 'center',
    backgroundColor: '#fff',
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
});
