import {useInfiniteQuery, useQueryClient} from '@tanstack/react-query';
import {newsService} from '../services/newsService';
import {newResponseType} from '../services/newsService/types';
import {QUERIES_KEYS} from '../utils/constants';
import {useCallback, useMemo} from 'react';

export type NewsParams = {
  q: string;
  page: number;
};

export const useNews = (searchQuery: string = '') => {
  const queryClient = useQueryClient();

  const useNewsQuery = useInfiniteQuery<newResponseType, newResponseType>({
    queryKey: [QUERIES_KEYS.news],
    queryFn: ({pageParam}) =>
      newsService.everyThing(searchQuery, pageParam as number),
    initialPageParam: 1,
    getNextPageParam: lastPage =>
      lastPage?.page < Math.ceil(lastPage?.totalResults / 20)
        ? lastPage?.page + 1
        : undefined,
  });
  const data = useMemo(
    () => useNewsQuery.data?.pages.flatMap(item => item.articles) || [],
    [useNewsQuery.data],
  );
  const refetch = useCallback(() => {
    queryClient.setQueryData([QUERIES_KEYS.news], () => {
      return {
        pageParams: [],
        pages: [],
      };
    });
    useNewsQuery.refetch();
  }, [queryClient, useNewsQuery]);

  const fetchNextPage = useCallback(
    () =>
      !useNewsQuery.isFetching &&
      !useNewsQuery.isError &&
      useNewsQuery.fetchNextPage(),
    [useNewsQuery],
  );
  return {
    ...useNewsQuery,
    data,
    refetch,
    fetchNextPage,
  };
};
