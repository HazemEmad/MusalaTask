import {StyleSheet} from 'react-native';
import {fs, pxH, pxW} from '../../../utils/layouts';

export const style = StyleSheet.create({
  image: {
    width: '100%',
    height: pxH(200),
  },
  subContainer: {
    padding: pxW(15),
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: fs(19),
    color: '#000',
    textAlign: 'left',
  },
  text: {
    fontSize: fs(15),
    color: '#000',
    textAlign: 'left',
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: fs(16),
    color: '#000',
  },
  redText: {
    fontWeight: 'bold',
    fontSize: fs(17),
    color: '#D13C39',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  mb20: {
    marginBottom: pxH(20),
  },
  w50: {
    width: '50%',
  },
  w100: {
    width: '100%',
  },
});
