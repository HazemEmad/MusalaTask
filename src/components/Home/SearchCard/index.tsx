/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {TextInput} from 'react-native';
import {style} from './style';
import {debounce} from 'lodash';

interface SearchProps {
  onSearch: () => void;
  searchQuery?: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const Search: React.FC<SearchProps> = ({
  onSearch,
  searchQuery,
  setSearchQuery,
}) => {
  const [t] = useTranslation();

  const onChangeText = useCallback((text: string) => {
    setSearchQuery(text);
  }, []);

  const debouncedSearch = useCallback(debounce(onSearch, 300), []);

  useEffect(() => {
    if (searchQuery !== undefined) {
      debouncedSearch();
    }
  }, [searchQuery]);

  return (
    <TextInput
      placeholder={t('home.searchPlaceHolder')}
      value={searchQuery}
      onChangeText={onChangeText}
      style={style.container}
    />
  );
};

export default Search;
