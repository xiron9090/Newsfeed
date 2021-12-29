export interface IParamsGetNews {
  language: string;
}
export interface INews {
  status: string;
  totalResults: number;
  articles: IArticle[];
}
export interface IArticle {
  source: ISource;
  author: null | string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: Date;
  content: null | string;
}

export interface ISource {
  id: null;
  name: string;
}
