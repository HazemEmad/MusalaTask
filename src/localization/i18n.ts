import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n, {ModuleType} from 'i18next';
import {initReactI18next} from 'react-i18next';
import {NativeModules, Platform} from 'react-native';
import {STORE_LANGUAGE_KEY} from '../utils/constants';
import {ar, en} from './translations';
// Get device language
const deviceLanguage =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale // iOS
    : NativeModules.I18nManager.localeIdentifier; // Android

const myLanguage = `${deviceLanguage}`.includes('ar') ? 'ar' : 'en';

const languageDetectorPlugin = {
  type: 'languageDetector' as ModuleType,
  async: true,
  init: () => {},
  detect: async function (callback: (lang: string) => void) {
    try {
      await AsyncStorage.getItem(STORE_LANGUAGE_KEY).then(language => {
        if (language) {
          return callback(language);
        } else {
          return callback(myLanguage);
        }
      });
    } catch (error) {
      console.log('Error reading language', error);
    }
  },
  cacheUserLanguage: async function (language: string) {
    try {
      //save a user's language choice in Async storage
      await AsyncStorage.setItem(STORE_LANGUAGE_KEY, language);
    } catch (error) {}
  },
};
const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
};

i18n
  .use(initReactI18next)
  .use(languageDetectorPlugin)
  .init({
    resources,
    compatibilityJSON: 'v3',
    fallbackLng: myLanguage,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });
export default i18n;
