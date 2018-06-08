import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import auth from './auth';
import authed from './authed';
import header from './header';
import home from './home';
import random from './random';

const rootReducer = combineReducers({
  auth,
  authed,
  header,
  home,
  random
});

export default createStore(rootReducer, applyMiddleware(thunk));
