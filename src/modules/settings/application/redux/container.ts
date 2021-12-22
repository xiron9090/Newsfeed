import {connect, ConnectedProps} from 'react-redux';
import {RootReducerState} from '../../../../core/redux/root.reducer';
import {
  getDeviceLanguage,
  getDeviceTheme,
  changeLanguage,
  changeTheme,
} from './action';
import {getError, getLanguage, getTheme} from './selector';

const mapStateToProps = (state: RootReducerState) => ({
  language: getLanguage(state),
  error: getError(state),
  theme: getTheme(state),
});

const mapDispatchToProps = {
  getDeviceLanguage,
  getDeviceTheme,
  changeLanguage,
  changeTheme,
};
const mergesProps = (
  stateProps: ReturnType<typeof mapStateToProps>,
  dispatchProps: typeof mapDispatchToProps,
) => ({
  language: stateProps.language,
  theme: stateProps.theme,
  error: stateProps.error,
  onGetDeviceLanguage: dispatchProps.getDeviceLanguage,
  onGetDeviceTheme: dispatchProps.getDeviceTheme,
  onChangeLanguage: dispatchProps.changeLanguage,
  onChangeTheme: dispatchProps.changeTheme,
});
const withReduxConnector = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergesProps,
);
export type fromRedux = ConnectedProps<typeof withReduxConnector>;
export default withReduxConnector;
