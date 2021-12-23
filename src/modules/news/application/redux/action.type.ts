import {AxiosError} from 'axios';
import {Action} from 'redux';
import {INews} from '../../domain/news.interface';

export const GET_NEWS_REQUEST = 'GET_NEWS_REQUEST';
export const GET_NEWS_SUCCESS = 'GET_NEWS_SUCCESS';
export const GET_NEWS_FAILURE = 'GET_NEWS_FAILURE';

export type GET_NEWS_REQUEST = Action<typeof GET_NEWS_REQUEST>;
export type GET_NEWS_SUCCESS = Action<typeof GET_NEWS_SUCCESS> & {
  data: INews[];
};
export type GET_NEWS_FAILURE = Action<typeof GET_NEWS_FAILURE> & {
  data: {error: AxiosError};
};

export type NEWS_ACTIONS_TYPE =
  | GET_NEWS_REQUEST
  | GET_NEWS_SUCCESS
  | GET_NEWS_FAILURE;
