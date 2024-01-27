import {Alert} from 'react-native';
import {HTTP} from '..';
import i18n from '../../localization/i18n';
import {newResponseErrorType, newResponseType} from './types';
import {AxiosError} from 'axios';

export const newsService = {
  everyThing: (q: string = '', page: number = 1) =>
    HTTP.get<newResponseType>('everything', {
      params: {
        q: encodeURIComponent(`"${q}"`),
        page,
        language: i18n.language,
        pageSize: 20,
      },
    })
      .then(res => ({...res.data, page}))
      .catch((err: AxiosError<newResponseErrorType>) => {
        Alert.alert('Error', err.response?.data?.message);
        throw err.response?.data;
      }),
};
