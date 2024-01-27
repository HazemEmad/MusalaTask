import React, {FC, memo} from 'react';
import DetailsCard from '../../components/Details/DetailsCard';
import {DetailsScreenProps} from './types/Details.types';

const Details: FC<DetailsScreenProps> = ({route}) => {
  const {
    params: {article},
  } = route || {};

  return <DetailsCard article={article} />;
};
export default memo(Details);
