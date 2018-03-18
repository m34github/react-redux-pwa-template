import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import authed from '../reducers/Authed';
import user from '../reducers/User';
import memo from '../reducers/Memo';

const rootReducer = combineReducers({
  authed,
  user,
  memo
});

export default createStore(rootReducer, applyMiddleware(thunk));
