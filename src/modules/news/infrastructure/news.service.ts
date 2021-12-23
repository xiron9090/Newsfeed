import {AxiosInstance} from 'axios';
import {AxiosResponse} from 'axios';
import NewsAdapter from '../domain/news.adaptar';
import {INews, IParamsGetNews} from '../domain/news.interface';

class NewsServices extends NewsAdapter<INews> {
  private _http: AxiosInstance;

  constructor(http: AxiosInstance) {
    super();
    this._http = http;
  }
  getNews(
    url: string,
    params: IParamsGetNews,
  ): Promise<AxiosResponse<INews[]>> {
    return this._http.get<INews[]>(url, {params});
  }
}
export default NewsServices;
