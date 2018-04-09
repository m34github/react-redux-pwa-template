import { LOAD_HOME } from '../actions';

const initialState = {
  payload: {},
  meta: {
    isLoaded: false
  },
  error: null
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_HOME: {
      return Object.assign({}, state, {
        meta: action.meta
      });
    }
    default: {
      return state;
    }
  }
};

export default homeReducer;
