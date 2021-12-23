import {connect, ConnectedProps} from 'react-redux';
import {
  getDeviceLanguage,
  getDeviceTheme,
} from '../../modules/settings/application/redux/action';
import {
  getLanguage,
  getTheme,
} from '../../modules/settings/application/redux/selector';
import {RootReducerState} from './root.reducer';

const mapStateToProps = (state: RootReducerState) => ({
  language: getLanguage(state),
  theme: getTheme(state),
});

const mapDispatchToProps = {
  getDeviceLanguage,
  getDeviceTheme,
};
const mergesProps = (
  stateProps: ReturnType<typeof mapStateToProps>,
  dispatchProps: typeof mapDispatchToProps,
) => ({
  language: stateProps.language,
  theme: stateProps.theme,
  onGetDeviceLanguage: dispatchProps.getDeviceLanguage,
  onGetDeviceTheme: dispatchProps.getDeviceTheme,
});
const withReduxConnector = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergesProps,
);
export type fromRedux = ConnectedProps<typeof withReduxConnector>;
export default withReduxConnector;
