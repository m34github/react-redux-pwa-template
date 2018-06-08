import { auth } from '../.env/firebase.config';

const CHECK_AUTHED = 'CHECK_AUTHED';

const checkAuthed = () => (dispatch) => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      dispatch({
        type: CHECK_AUTHED,
        payload: {
          user
        },
        meta: {
          isAuthed: true,
          isLoaded: true
        }
      });
    } else {
      dispatch({
        type: CHECK_AUTHED,
        payload: {
          user
        },
        meta: {
          isAuthed: false,
          isLoaded: true
        }
      });
    }
  });
};

const initialState = {
  isAuthed: false,
  isLoaded: false,
  user: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_AUTHED: {
      return Object.assign({}, state, {
        isAuthed: action.meta.isAuthed,
        isLoaded: action.meta.isLoaded,
        user: action.payload.user
      });
    }
    default: {
      return state;
    }
  }
};

export { checkAuthed };
export default reducer;
