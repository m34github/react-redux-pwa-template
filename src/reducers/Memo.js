import { GET_MEMO } from '../actions';

const initialState = {
  payload: {},
  meta: {},
  error: null
};

const memo = (state = initialState, action) => {
  switch (action.type) {
    case GET_MEMO: {
      return Object.assign({}, state, {
        payload: action.payload
      });
    }
    default: {
      return state;
    }
  }
};

export default memo;
