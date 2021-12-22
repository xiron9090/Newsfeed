import {CustomThunkAction} from '../../../../core/redux/action.type';
import {ThemeName} from '../../domain/settings.interface';
import SettingsService from '../../infrastructure/settings.service';
import {
  SETTINGS_ACTIONS_TYPE,
  GET_DEVICE_LANGUAGE_REQUEST,
  GET_DEVICE_LANGUAGE_SUCCESS,
  GET_DEVICE_LANGUAGE_FAILURE,
  GET_DEVICE_THEME_REQUEST,
  GET_DEVICE_THEME_SUCCESS,
  GET_DEVICE_THEME_FAILURE,
  CHANGE_LANGUAGE,
  CHANGE_THEME,
} from './action.type';

const settignsService = new SettingsService();

export const getDeviceLanguage =
  (): CustomThunkAction<SETTINGS_ACTIONS_TYPE> => dispatch => {
    dispatch({type: GET_DEVICE_LANGUAGE_REQUEST});
    try {
      const response = settignsService.getDeviceLanguage();
      dispatch({type: GET_DEVICE_LANGUAGE_SUCCESS, data: response});
    } catch (error) {
      dispatch({type: GET_DEVICE_LANGUAGE_FAILURE, data: {error}});
    }
  };
export const getDeviceTheme =
  (): CustomThunkAction<SETTINGS_ACTIONS_TYPE> => dispatch => {
    dispatch({type: GET_DEVICE_THEME_REQUEST});
    try {
      const response = settignsService.getDeviceTheme();
      dispatch({type: GET_DEVICE_THEME_SUCCESS, data: response});
    } catch (error) {
      dispatch({type: GET_DEVICE_THEME_FAILURE, data: {error}});
    }
  };
export const changeLanguage =
  (value: string): CustomThunkAction<SETTINGS_ACTIONS_TYPE> =>
  dispatch => {
    dispatch({type: CHANGE_LANGUAGE, data: value});
  };
export const changeTheme =
  (value: ThemeName): CustomThunkAction<SETTINGS_ACTIONS_TYPE> =>
  dispatch => {
    dispatch({type: CHANGE_THEME, data: value});
  };
