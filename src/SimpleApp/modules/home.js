// action type
const LOAD_HOME = 'LOAD_HOME';

// action creator
export const loadHome = () => (dispatch) => {
  setTimeout(() => {
    dispatch({
      type: LOAD_HOME,
      meta: {
        isLoaded: true
      }
    });
  }, 1000);
};

// initial state
const initialState = {
  isLoaded: false
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_HOME: {
      return Object.assign({}, state, {
        isLoaded: action.meta.isLoaded
      });
    }
    default: {
      return state;
    }
  }
};

export default reducer;
