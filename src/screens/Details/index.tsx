import React, {FC, memo} from 'react';
import DetailsCard from '@components/Details/DetailsCard';
import {DetailsScreenProps} from './types/Details.types';
import {ScrollView} from 'react-native';

const Details: FC<DetailsScreenProps> = ({route}) => {
  const {
    params: {article},
  } = route || {};

  return (
    <ScrollView>
      <DetailsCard article={article} />
    </ScrollView>
  );
};
export default memo(Details);
