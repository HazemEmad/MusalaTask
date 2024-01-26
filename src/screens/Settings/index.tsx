import React, {memo, useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import {I18nManager, StyleSheet, Text, View} from 'react-native';
import RNRestart from 'react-native-restart';
import {fs, pxW} from '../../utils/layouts';

function Settings(): React.JSX.Element {
  const {t, i18n} = useTranslation();

  const changeLang = useCallback(() => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en');
    I18nManager.forceRTL(i18n.language === 'ar');
    I18nManager.allowRTL(i18n.language === 'ar');
    RNRestart.restart();
  }, [i18n]);

  return (
    <View style={style.container}>
      <Text style={style.textStyle} onPress={changeLang}>
        {t('settings.changeLang')}
      </Text>
    </View>
  );
}
export default memo(Settings);

const style = StyleSheet.create({
  container: {flex: 1, padding: pxW(25)},
  textStyle: {
    fontWeight: 'bold',
    fontSize: fs(18),
    alignSelf: 'flex-start',
  },
});
