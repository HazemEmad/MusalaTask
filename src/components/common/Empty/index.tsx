import React, {FC, memo} from 'react';
import {useTranslation} from 'react-i18next';
import {Text} from 'react-native';

const Empty: FC<{loading: boolean}> = ({loading}) => {
  const [t] = useTranslation();
  return !loading ? <Text>{t('common.empty')}</Text> : null;
};

export default memo(Empty);
