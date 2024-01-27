import {articles} from '../../../../services/newsService/types';

export type NewsListType = {
  news: articles[];
  loading: boolean;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  refreshData: () => void;
};
