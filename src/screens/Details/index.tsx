import React, {memo} from 'react';
import DetailsCard from '../../components/Details/DetailsCard';

function Details(props: any): React.JSX.Element {
  return <DetailsCard article={props?.route?.params?.article} />;
}
export default memo(Details);
