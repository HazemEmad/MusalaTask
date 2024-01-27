import React, {FC, memo, useCallback} from 'react';
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

  return (
    <FlatList
      testID="newsList"
      contentContainerStyle={style.container}
      data={news}
      keyExtractor={keyExtractor}
      renderItem={renderItems}
      onEndReached={onEndReached}
      ListEmptyComponent={<Empty loading={loading} />}
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={refreshData} />
      }
      ListFooterComponent={<Loader loading={loading} />}
    />
  );
};

export default memo(NewsList);
