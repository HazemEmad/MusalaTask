import {RouteProp} from '@react-navigation/native';
import {HomeStackParamList} from '@navigations/HomeStack/types/HomeStack.type';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {articles} from '@services/newsService/types';

export interface DetailsScreen {
  article: articles;
}
export type DetailsScreenNavigationProp = NativeStackNavigationProp<
  HomeStackParamList,
  'Details'
>;
export type DetailsScreenRouteProp = RouteProp<HomeStackParamList, 'Details'>;

export interface DetailsScreenProps {
  navigation: DetailsScreenNavigationProp;
  route: DetailsScreenRouteProp;
}
