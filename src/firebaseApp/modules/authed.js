const CHECK_AUTH = 'CHECK_AUTH';

export const checkAuth = () => (dispatch) => {
  dispatch({
    type: CHECK_AUTH,
    payload: {},
    meta: {
      isAuthed: false,
      isLoaded: true
    }
  });
};

const initialState = {
  isAuthed: false,
  isLoaded: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_AUTH: {
      return Object.assign({}, state, {
        isAuthed: action.meta.isAuthed,
        isLoaded: action.meta.isLoaded
      });
    }
    default: {
      return state;
    }
  }
};

export default reducer;
