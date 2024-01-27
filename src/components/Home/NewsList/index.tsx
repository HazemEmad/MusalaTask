import React, {FC, memo, useCallback, useMemo} from 'react';
import {FlatList, RefreshControl} from 'react-native';
import {articles} from '../../../services/newsService/types';
import Empty from '../../common/Empty';
import Loader from '../../common/Loader';
import NewsCard from '../NewsCard';
import {style} from './style';
import {NewsListType} from './types/NewsListType.type';

const NewsList: FC<NewsListType> = ({
  news,
  loading,
  onEndReached,
  refreshData,
}) => {
  const keyExtractor = useCallback(
    (_: articles, index: number) => index?.toString(),
    [],
  );

  const renderItems = useCallback(
    ({item, index}: {item: articles; index: number}) => (
      <NewsCard article={item} key={index?.toString()} {...item} />
    ),
    [],
  );

  const EmptyComponent = useMemo(() => <Empty loading={loading} />, [loading]);

  const LoaderComponent = useMemo(
    () => <Loader loading={loading} />,
    [loading],
  );

  const RefreshControlComponent = useMemo(
    () => <RefreshControl refreshing={loading} onRefresh={refreshData} />,
    [loading, refreshData],
  );

  return (
    <FlatList
      testID="newsList"
      contentContainerStyle={style.container}
      data={news}
      keyExtractor={keyExtractor}
      renderItem={renderItems}
      onEndReached={onEndReached}
      ListEmptyComponent={EmptyComponent}
      refreshControl={RefreshControlComponent}
      ListFooterComponent={LoaderComponent}
    />
  );
};

export default memo(NewsList);
