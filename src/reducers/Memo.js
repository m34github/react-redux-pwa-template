import { READ_MEMO } from '../actions';

const initialState = {
  payload: {
    memo: []
  },
  meta: {},
  error: null
};

const memo = (state = initialState, action) => {
  switch (action.type) {
    case READ_MEMO: {
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
