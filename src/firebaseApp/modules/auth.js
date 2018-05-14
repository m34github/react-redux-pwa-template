import { auth } from '../firebase.config';

const CHECK_AUTH = 'CHECK_AUTH';
const LOGIN_USER = 'LOGIN_USER';
const REGIST_USER = 'REGIST_USER';

const checkAuth = () => (dispatch) => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      dispatch({
        type: CHECK_AUTH,
        meta: {
          isAuthed: true,
          isLoaded: true
        }
      });
    } else {
      dispatch({
        type: CHECK_AUTH,
        meta: {
          isAuthed: false,
          isLoaded: true
        }
      });
    }
  });
};

const registUser = (email, password) => (dispatch) => {
  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      dispatch({
        type: REGIST_USER,
        error: null
      });
    })
    .catch((err) => {
      dispatch({
        type: REGIST_USER,
        error: err
      });
    });
};

const loginUser = (email, password) => (dispatch) => {
  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      dispatch({
        type: LOGIN_USER,
        error: null
      });
    })
    .catch((err) => {
      dispatch({
        type: LOGIN_USER,
        error: err
      });
    });
};

const initialState = {
  isAuthed: false,
  isLoaded: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_AUTH: {
      return Object.assign({}, state, {
        isAuthed: action.meta.isAuthed,
        isLoaded: action.meta.isLoaded
      });
    }
    case LOGIN_USER: {
      return Object.assign({}, state, {
        error: action.error
      });
    }
    case REGIST_USER: {
      return Object.assign({}, state, {
        error: action.error
      });
    }
    default: {
      return state;
    }
  }
};

export { checkAuth, loginUser, registUser };
export default reducer;
