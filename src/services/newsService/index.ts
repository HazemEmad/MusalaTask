import {HTTP} from '..';
import i18n from '../../localization/i18n';
import {newResponseType} from './types';

export const newsService = {
  everyThing: (q: string = '', page: number = 1) =>
    HTTP.get<newResponseType>('everything', {
      params: {
        q: encodeURI(`"${q}"`),
        page,
        language: i18n.language,
      },
    }).then(res => res.data),
  topHeadlines: (q: string = '', page: number = 1) =>
    HTTP.get<newResponseType>('top-headlines', {
      params: {
        q: encodeURI(`"${q}"`),
        page,
        language: i18n.language,
      },
    }).then(res => res.data),
};
