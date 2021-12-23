import {combineReducers} from 'redux';
import newsScreenReducer from '../../modules/news/application/redux/reducer';
import settingsScreenReducer from '../../modules/settings/application/redux/reducer';

const rootReducer = combineReducers({
  settingsScreenReducer,
  newsScreenReducer,
});
export type RootReducerState = ReturnType<typeof rootReducer>;
export default rootReducer;
