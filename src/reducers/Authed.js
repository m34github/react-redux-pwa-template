import { CHECK_AUTH } from '../actions';

const initialState = {
  payload: {},
  meta: {},
  error: null
};

const authed = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_AUTH: {
      return Object.assign({}, state, {
        payload: action.payload,
        meta: action.meta
      });
    }
    default: {
      return state;
    }
  }
};

export default authed;
