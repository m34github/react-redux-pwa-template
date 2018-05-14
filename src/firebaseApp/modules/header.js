import { auth } from '../firebase.config';

const LOGOUT_USER = 'LOGOUT_USER';

const logoutUser = () => (dispatch) => {
  auth.signOut()
    .then(() => {
      dispatch({
        type: LOGOUT_USER,
        error: null
      });
    })
    .catch((err) => {
      dispatch({
        type: LOGOUT_USER,
        error: err
      });
    });
};

const initialState = {
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT_USER: {
      return Object.assign({}, state, {
        error: action.error
      });
    }
    default: {
      return state;
    }
  }
};

export { logoutUser };
export default reducer;
