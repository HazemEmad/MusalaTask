import {StyleSheet} from 'react-native';
import {fs, pxH, pxW} from '../../../utils/layouts';

export const style = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
    borderRadius: pxW(15),
    marginBottom: pxH(20),
    backgroundColor: '#fff',
  },
  image: {
    borderTopRightRadius: pxW(15),
    borderTopLeftRadius: pxW(15),
    width: '100%',
    height: pxH(150),
  },
  subContainer: {
    padding: pxW(15),
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: fs(19),
    color: '#000',
  },
  text: {
    fontSize: fs(15),
    color: '#000',
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
  mb7: {
    marginBottom: pxH(7),
  },
});
