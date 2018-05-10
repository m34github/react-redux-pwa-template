const LOAD_HOME = 'LOAD_HOME';

export const loadHome = () => (dispatch) => {
  setTimeout(() => {
    dispatch({
      type: LOAD_HOME,
      payload: {},
      meta: {
        isLoaded: true
      }
    });
  }, 1000);
};

const initialState = {
  isLoaded: false
};

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
