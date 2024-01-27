import {AxiosError} from 'axios';
import {Alert, I18nManager} from 'react-native';
import {HTTP} from '..';
import {newResponseErrorType, newResponseType} from './types';

export const newsService = {
  everyThing: (q: string = '', page: number = 1) =>
    HTTP.get<newResponseType>('everything', {
      params: {
        q: encodeURI(`${q}`),
        page,
        language: I18nManager.isRTL ? 'ar' : 'en',
        pageSize: 20,
        domains: ',',
      },
    })
      .then(res => ({...res.data, page}))
      .catch((err: AxiosError<newResponseErrorType>) => {
        Alert.alert('Error', err.response?.data?.message);
        throw err.response?.data;
      }),
};
