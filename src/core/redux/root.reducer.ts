import {combineReducers} from 'redux';
import settingsScreenReducer from '../../modules/settings/application/redux/reducer';

const rootReducer = combineReducers({
  settingsScreenReducer,
});
export type RootReducerState = ReturnType<typeof rootReducer>;
export default rootReducer;
