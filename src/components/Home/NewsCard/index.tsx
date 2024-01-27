import React, {FC, memo} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {articles} from '../../../services/newsService/types';
import {style} from './style';
import {useTranslation} from 'react-i18next';
import moment from 'moment';
const NewsCard: FC<{article: articles}> = ({article}) => {
  const [t] = useTranslation();
  return (
    <Pressable style={style.container}>
      <Image style={style.image} source={{uri: article?.urlToImage}} />
      <View style={style.subContainer}>
        <Text style={[style.title, style.mb7]}>{article?.title}</Text>
        <Text style={[style.text, style.mb7]}>{article?.description}</Text>
        <View style={[style.row, style.spaceBetween, style.mb7, style.w100]}>
          <View style={[style.row, style.w50]}>
            <Text style={style.text}>{t('home.by')}</Text>
            <Text style={style.boldText}>{article?.author}</Text>
          </View>
          <Text style={style.redText}>
            {moment(article?.publishedAt).format('MMM DD, YYYY')}
          </Text>
        </View>
        <View style={[style.row, style.mb7, style.w100]}>
          <Text style={style.text}>{t('home.source')}</Text>
          <Text style={style.redText}>{article?.source?.name}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default memo(NewsCard);
