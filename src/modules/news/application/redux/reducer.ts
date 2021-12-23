import {Reducer} from 'react';
import {INews} from '../../domain/news.interface';
import {
  GET_NEWS_FAILURE,
  GET_NEWS_REQUEST,
  GET_NEWS_SUCCESS,
} from './action.type';

type NewsScreenReducerState = {
  news: INews[];
  loading: boolean;
  error: any;
};
const initialState: NewsScreenReducerState = {
  news: [],
  loading: false,
  error: null,
};
type NewsScreenReducerAction =
  | GET_NEWS_REQUEST
  | GET_NEWS_SUCCESS
  | GET_NEWS_FAILURE;
const newsScreenReducer: Reducer<
  NewsScreenReducerState,
  NewsScreenReducerAction
> = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS_REQUEST: {
      return {...state, loading: true};
    }
    case GET_NEWS_SUCCESS: {
      return {...state, loading: false, news: action.data, error: null};
    }
    case GET_NEWS_FAILURE: {
      return {...state, loading: false, news: [], error: action.data};
    }
    default: {
      return state;
    }
  }
};
export default newsScreenReducer;
