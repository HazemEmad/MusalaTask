import React, {memo, useState} from 'react';
import NewsList from '@components/Home/NewsList';
import Search from '@components/Home/SearchCard';
import {useNews} from '@hooks/useNews';

function Home(): React.JSX.Element {
  const [searchQuery, setSearchQuery] = useState<string>();
  const {data, isFetching, refetch, fetchNextPage} = useNews(searchQuery);
  return (
    <>
      <Search
        onSearch={refetch}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <NewsList
        loading={isFetching}
        news={data}
        refreshData={refetch}
        onEndReached={fetchNextPage}
      />
    </>
  );
}
export default memo(Home);
