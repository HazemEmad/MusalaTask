import React, {memo, useEffect} from 'react';

import {AxiosError} from 'axios';
import {StyleSheet, View} from 'react-native';
import {newsService} from '../../services/newsService';

function Home(): React.JSX.Element {
  const get = async () => {
    await newsService
      .everyThing()
      .then(res => {
        console.log(res);
      })
      .catch((err: AxiosError) => {
        console.log(err.response?.data);
      });
  };
  useEffect(() => {
    //get();
  }, []);
  return <View style={style.container} />;
}
export default memo(Home);

const style = StyleSheet.create({container: {flex: 1}});
