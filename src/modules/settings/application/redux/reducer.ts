import {Reducer} from 'react';
import {
  CHANGE_LANGUAGE,
  CHANGE_THEME,
  GET_DEVICE_LANGUAGE_FAILURE,
  GET_DEVICE_LANGUAGE_REQUEST,
  GET_DEVICE_LANGUAGE_SUCCESS,
  GET_DEVICE_THEME_FAILURE,
  GET_DEVICE_THEME_REQUEST,
  GET_DEVICE_THEME_SUCCESS,
} from './action.type';

type SettignScreenReducerState = {
  language: string;
  theme: string;
  error: any;
};
const initialState: SettignScreenReducerState = {
  language: 'en',
  theme: 'ligth',
  error: null,
};
type SettingsScreenReducerAction =
  | GET_DEVICE_LANGUAGE_REQUEST
  | GET_DEVICE_LANGUAGE_SUCCESS
  | GET_DEVICE_LANGUAGE_FAILURE
  | GET_DEVICE_THEME_REQUEST
  | GET_DEVICE_THEME_SUCCESS
  | GET_DEVICE_THEME_FAILURE
  | CHANGE_LANGUAGE
  | CHANGE_THEME;
const settingsScreenReducer: Reducer<
  SettignScreenReducerState,
  SettingsScreenReducerAction
> = (state = initialState, action) => {
  switch (action.type) {
    case GET_DEVICE_LANGUAGE_REQUEST: {
      return {...state};
    }
    case GET_DEVICE_LANGUAGE_SUCCESS: {
      return {...state, language: action.data, error: null};
    }
    case GET_DEVICE_LANGUAGE_FAILURE: {
      return {...state, error: action.data.error};
    }
    case GET_DEVICE_THEME_REQUEST: {
      return {...state};
    }
    case GET_DEVICE_THEME_SUCCESS: {
      return {...state, theme: action.data, error: null};
    }
    case GET_DEVICE_THEME_FAILURE: {
      return {...state, error: action.data.error};
    }
    case CHANGE_LANGUAGE: {
      return {...state, language: action.data, error: null};
    }
    case CHANGE_THEME: {
      return {...state, theme: action.data, error: null};
    }

    default: {
      return state;
    }
  }
};
export default settingsScreenReducer;
