import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './root.reducer';

const middleware = [thunk];
if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middleware.push(createDebugger());
}
const store = createStore(rootReducer, applyMiddleware(...middleware));
export default store;
