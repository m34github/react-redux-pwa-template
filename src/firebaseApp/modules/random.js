import axios from 'axios';

// action type
const LOAD_RANDOM_USER = 'LOAD_RANDOM_USER';
const RESET_RANDOM_USER = 'RESET_RANDOM_USER';

// action creator
const loadRandomUser = () => (dispatch) => {
  axios.get('https://randomuser.me/api')
    .then((data) => {
      dispatch({
        type: LOAD_RANDOM_USER,
        payload: {
          user: data.data.results[0]
        },
        meta: {
          isLoaded: true
        }
      });
    });
};

const resetRandomUser = () => (dispatch) => {
  dispatch({
    type: RESET_RANDOM_USER,
    meta: {
      isLoaded: false
    }
  });
};

// initial state
const initialState = {
  user: {},
  isLoaded: false
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_RANDOM_USER: {
      return Object.assign({}, state, {
        user: action.payload.user,
        isLoaded: action.meta.isLoaded
      });
    }
    case RESET_RANDOM_USER: {
      return Object.assign({}, state, {
        isLoaded: action.meta.isLoaded
      });
    }
    default: {
      return state;
    }
  }
};

export { loadRandomUser, resetRandomUser };
export default reducer;
