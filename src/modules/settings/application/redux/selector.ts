import {createSelector} from 'reselect';
import {RootReducerState} from '../../../../core/redux/root.reducer';

const settingsReducer = (state: RootReducerState) =>
  state.settingsScreenReducer;
export const getLanguage = createSelector(
  [settingsReducer],
  ({language}) => language,
);
export const getTheme = createSelector([settingsReducer], ({theme}) => theme);
export const getError = createSelector([settingsReducer], error => error);
