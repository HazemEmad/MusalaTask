import moment from 'moment';
import React, {FC, memo} from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View} from 'react-native';
import {articles} from '../../../services/newsService/types';
import {style} from './style';
import AppImage from '../../common/Image/Image';

const DetailsCard: FC<{article: articles}> = ({article}) => {
  const [t] = useTranslation();
  return (
    <View>
      <AppImage style={style.image} uri={article?.urlToImage} />
      <View style={style.subContainer}>
        <Text style={[style.title, style.mb20]}>{article?.title}</Text>
        <Text style={[style.text, style.mb20]}>{article?.description}</Text>
        <View style={[style.row, style.spaceBetween, style.mb20, style.w100]}>
          <View style={[style.row, style.w50]}>
            <Text style={style.text}>{t('home.by')}</Text>
            <Text style={style.boldText}>{article?.author}</Text>
          </View>
          <Text style={style.redText}>
            {moment(article?.publishedAt).format('MMM DD, YYYY')}
          </Text>
        </View>
        <View style={[style.row, style.mb20, style.w100]}>
          <Text style={style.text}>{t('home.source')}</Text>
          <Text style={style.redText}>{article?.source?.name}</Text>
        </View>
      </View>
    </View>
  );
};

export default memo(DetailsCard);
