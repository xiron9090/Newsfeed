import {getNews} from './action';
import {
  getNewsErrorSelector,
  getNewsLoadingSelector,
  getNewsSelector,
} from './selector';
import {connect, ConnectedProps} from 'react-redux';
import {RootReducerState} from '../../../../core/redux/root.reducer';
import {
  getLanguage,
  getTheme,
} from '../../../settings/application/redux/selector';

const mapStateToProps = (state: RootReducerState) => ({
  news: getNewsSelector(state),
  loading: getNewsLoadingSelector(state),
  error: getNewsErrorSelector(state),
  theme: getTheme(state),
  language: getLanguage(state),
});

const mapDispatchToProps = {
  getNews,
};
const mergesProps = (
  stateProps: ReturnType<typeof mapStateToProps>,
  dispatchProps: typeof mapDispatchToProps,
) => ({
  news: stateProps.news,
  loading: stateProps.loading,
  error: stateProps.error,
  theme: stateProps.theme,
  language: stateProps.language,
  onGetNews: dispatchProps.getNews,
});
const withReduxConnector = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergesProps,
);
export type fromRedux = ConnectedProps<typeof withReduxConnector>;
export default withReduxConnector;
