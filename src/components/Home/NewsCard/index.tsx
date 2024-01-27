import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {FC, memo, useCallback} from 'react';
import {Pressable, Text, View} from 'react-native';
import {HomeStackParamList} from '../../../navigations/HomeStack/types/HomeStack.type';
import {articles} from '../../../services/newsService/types';
import AppImage from '../../common/Image/Image';
import {style} from './style';

const NewsCard: FC<{article: articles}> = ({article}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParamList>>();

  const onPress = useCallback(() => {
    navigation.navigate('Details', {article});
  }, [navigation, article]);

  return (
    <Pressable style={style.container} onPress={onPress}>
      <AppImage style={style.image} uri={article?.urlToImage} />
      <View style={[style.subContainer, style.mb7]}>
        <Text style={style.title}>{article?.title}</Text>
      </View>
    </Pressable>
  );
};

export default memo(NewsCard);
