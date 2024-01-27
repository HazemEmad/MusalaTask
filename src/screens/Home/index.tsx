import React, {memo, useState} from 'react';
import NewsList from '../../components/Home/NewsList';
import {useNews} from '../../hooks/useNews';

function Home(): React.JSX.Element {
  const [searchQuery, setSearchQuery] = useState('');

  const {data, isFetching, refetch, fetchNextPage, isError} =
    useNews(searchQuery);

  const fetchNext = () => {
    if (!isFetching && !isError) {
      fetchNextPage();
    }
  };

  return (
    <>
      {/* <Search
        onSearch={handleSearch}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      /> */}
      <NewsList
        loading={isFetching}
        news={data}
        refreshData={refetch}
        onEndReached={fetchNext}
      />
    </>
  );
}
export default memo(Home);
