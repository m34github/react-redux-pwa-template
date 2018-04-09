export const LOAD_HOME = 'LOAD_HOME';

export const action = {
  load: () => (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: LOAD_HOME,
        meta: {
          isLoaded: true
        }
      });
    }, 2000);
  }
};
