import React, {FC, memo, useCallback} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {articles} from '../../../services/newsService/types';
import {style} from './style';
import {useNavigation} from '@react-navigation/native';
import {HOME_STACK_NAV} from '../../../utils/constants';

const NewsCard: FC<{article: articles}> = ({article}) => {
  const navigation = useNavigation<any>();

  const onPress = useCallback(() => {
    navigation.navigate(HOME_STACK_NAV.details, {article});
  }, [navigation, article]);

  return (
    <Pressable style={style.container} onPress={onPress}>
      <Image style={style.image} source={{uri: article?.urlToImage}} />
      <View style={[style.subContainer, style.mb7]}>
        <Text style={style.title}>{article?.title}</Text>
      </View>
    </Pressable>
  );
};

export default memo(NewsCard);
