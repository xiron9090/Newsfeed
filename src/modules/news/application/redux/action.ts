import api from '../../../../core/api';
import customAxios from '../../../../core/http';
import {CustomThunkAction} from '../../../../core/redux/action.type';
import NewsServices from '../../infrastructure/news.service';
import {
  GET_NEWS_FAILURE,
  GET_NEWS_REQUEST,
  GET_NEWS_SUCCESS,
  NEWS_ACTIONS_TYPE,
} from './action.type';
const newsServices = new NewsServices(customAxios);

export const getNews = (): CustomThunkAction<NEWS_ACTIONS_TYPE> => {
  return dispatch => {
    dispatch({type: GET_NEWS_REQUEST});
    newsServices
      .getNews(api.TOP_HEADLINES, {country: 'cu', language: 'es'})
      .then(
        resp => {
          dispatch({type: GET_NEWS_SUCCESS, data: resp.data});
        },
        error => dispatch({type: GET_NEWS_FAILURE, data: error}),
      );
  };
};
