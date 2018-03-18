import axios from 'axios';

import { db } from '../commons/firebase.config';

export const GET_USER_INFO = 'GET_USER_INFO';
export const GET_MEMO = 'GET_MEMO';

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
  },
  getMemo: () => {
    return (dispatch, getState) => {
      db.collection('users').get()
        .then((snapshot) => {
          dispatch({
            type: GET_MEMO,
            payload: {
              memo: snapshot.docs[0].data().name
            }
          });
        });
    };
  }
};
