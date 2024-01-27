import React, {FC, memo} from 'react';
import {Image, Text, View} from 'react-native';
import {articles} from '../../../services/newsService/types';
import {style} from './style';

const NewsCard: FC<{article: articles}> = ({article}) => {
  return (
    <View style={style.container}>
      <Image
        style={style.image}
        source={{uri: 'https://picsum.photos/id/237/200/300'}}
      />
      <View style={style.subContainer}>
        <Text style={[style.title, style.mb7]}>{'title title'}</Text>
        <Text style={[style.text, style.mb7]}>{'sub title'}</Text>
        <View style={[style.row, style.spaceBetween, style.mb7]}>
          <View style={[style.row]}>
            <Text style={style.text}>{'by: '}</Text>
            <Text style={style.boldText}>{'Hazem Emad'}</Text>
          </View>
          <Text style={style.redText}>{'May 31st 22'}</Text>
        </View>
        <View style={[style.row, style.mb7]}>
          <Text style={style.text}>{'source: '}</Text>
          <Text style={style.redText}>{'Hazem Emad'}</Text>
        </View>
      </View>
    </View>
  );
};

export default memo(NewsCard);
