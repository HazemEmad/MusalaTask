import {useInfiniteQuery, useQueryClient} from '@tanstack/react-query';
import {newsService} from '../services/newsService';
import {newResponseType} from '../services/newsService/types';
import {QUERIES_KEYS} from '../utils/constants';

export type NewsParams = {
  q: string;
  page: number;
};

export const useNews = (searchQuery: string = '') => {
  const queryClient = useQueryClient();

  const useNewsQuery = useInfiniteQuery<newResponseType, newResponseType>({
    queryKey: QUERIES_KEYS.news,
    queryFn: ({pageParam}) =>
      newsService.everyThing(searchQuery, pageParam as number),
    initialPageParam: 1,
    getNextPageParam: lastPage =>
      lastPage?.page < Math.ceil(lastPage?.totalResults / 20)
        ? lastPage?.page + 1
        : undefined,
  });

  const refetch = () => {
    queryClient.setQueryData(
      QUERIES_KEYS.news,
      (old: {pageParams: number[]; pages: newResponseType[]}) => {
        return {
          pageParams: [old?.pageParams?.[0]],
          pages: [old?.pages?.[0]],
        };
      },
    );
    useNewsQuery.refetch();
  };

  return {
    ...useNewsQuery,
    data: useNewsQuery.data?.pages.flatMap(item => item.articles) || [],
    refetch,
  };
};
