import {AxiosResponse} from 'axios';
import {IParamsGetNews} from './news.interface';

abstract class NewsAdapter<T> {
  abstract getNews(
    url: string,
    params: IParamsGetNews,
  ): Promise<AxiosResponse<T[]>>;
}
export default NewsAdapter;
