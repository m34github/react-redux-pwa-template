import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import home from '../reducers/Home';
import user from '../reducers/User';
import memo from '../reducers/Memo';

const rootReducer = combineReducers({
  home: home,
  user: user,
  memo: memo
});

export default createStore(rootReducer, applyMiddleware(thunk));

