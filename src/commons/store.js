import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import home from '../reducers/Home';
import user from '../reducers/User';

const rootReducer = combineReducers({
  home: home,
  user: user
});

export default createStore(rootReducer, applyMiddleware(thunk));

