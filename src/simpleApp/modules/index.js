import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import home from './home';
import random from './random';

const rootReducer = combineReducers({
  home,
  random
});

export default createStore(rootReducer, applyMiddleware(thunk));
