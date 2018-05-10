import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import authed from './authed';
import home from './home';

const rootReducer = combineReducers({
  authed,
  home
});

export default createStore(rootReducer, applyMiddleware(thunk));
