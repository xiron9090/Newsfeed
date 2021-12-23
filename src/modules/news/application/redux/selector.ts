import {createSelector} from 'reselect';
import {RootReducerState} from '../../../../core/redux/root.reducer';

const newsReducer = (state: RootReducerState) => state.newsScreenReducer;
export const getNewsSelector = createSelector(
  [newsReducer],
  ({news}) => news.articles,
);
export const getNewsErrorSelector = createSelector(
  [newsReducer],
  error => error.error,
);
export const getNewsLoadingSelector = createSelector(
  [newsReducer],
  loading => loading.loading,
);
