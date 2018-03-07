import axios from 'axios';

export const GET_USER_INFO = 'GET_USER_INFO';

export const action = {
  getUserInfo: () => {
    return (dispatch, getState) => {
      axios.get('https://randomuser.me/api')
        .then((res) => {
          dispatch({
            type: GET_USER_INFO,
            payload: {
              user: res.data.results[0]
            },
            meta: {
              isLoaded: true
            }
          });
        });
    };
  }
};
