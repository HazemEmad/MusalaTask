import {articles} from '@services/newsService/types';

export type NewsListType = {
  news: articles[];
  loading: boolean;
  onEndReached: () => void;
  refreshData: () => void;
};
