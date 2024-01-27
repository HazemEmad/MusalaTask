import React, {FC, memo} from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, Text} from 'react-native';

const Empty: FC<{loading: boolean}> = ({loading}) => {
  const [t] = useTranslation();
  return !loading ? <Text style={style.text}>{t('common.empty')}</Text> : null;
};

export default memo(Empty);
const style = StyleSheet.create({
  text: {
    alignSelf: 'center',
  },
});
