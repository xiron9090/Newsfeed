import {IArticle} from './../../modules/news/domain/news.interface';
import {ScreensRoute} from '../../shared/utils/constanst';

export type MainStackParamList = {
  [ScreensRoute.NewsDetails]: {params: IArticle};
};
