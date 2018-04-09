import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import home from '../reducers/Home';

const rootReducer = combineReducers({
  home
});

export default createStore(rootReducer, applyMiddleware(thunk));
