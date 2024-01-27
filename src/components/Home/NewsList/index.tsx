import React, {FC, memo, useCallback} from 'react';
import {FlatList, RefreshControl} from 'react-native';
import Empty from '../../common/Empty';
import Loader from '../../common/Loader';
import NewsCard from '../NewsCard';
import {NewsListType} from './types/NewsListType.type';
import {articles} from '../../../services/newsService/types';
import {style} from './style';

const NewsList: FC<NewsListType> = ({
  news,
  loading,
  setPage,
  page,
  refreshData,
}) => {
  const keyExtractor = useCallback((item: any) => item?.source?.id, []);

  const renderItems = useCallback(
    ({item}: {item: any; index: number}) => (
      <NewsCard key={item?.source?.id} {...item} />
    ),
    [],
  );

  const onEndReached = useCallback(
    () => !loading && setPage(page + 1),
    [loading, page, setPage],
  );

  return (
    <FlatList
      testID="newsList"
      style={style.container}
      data={['22']}
      keyExtractor={keyExtractor}
      renderItem={renderItems}
      //onEndReached={onEndReached}
      //ListEmptyComponent={<Empty loading={loading} />}
      /*  refreshControl={
        <RefreshControl refreshing={loading} onRefresh={refreshData} />
      } */
      //ListFooterComponent={<Loader loading={loading} />}
    />
  );
};

export default memo(NewsList);
