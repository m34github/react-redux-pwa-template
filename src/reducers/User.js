import { GET_USER_INFO } from '../actions';

const initialState = {
  payload: {},
  meta: {
    isLoaded: false
  },
  error: null
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_INFO: {
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

export default user;
