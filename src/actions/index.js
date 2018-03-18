import axios from 'axios';

import {
  auth,
  db
} from '../commons/firebase.config';

export const CHECK_AUTH = 'CHECK_AUTH';
export const GET_USER_INFO = 'GET_USER_INFO';
export const GET_MEMO = 'GET_MEMO';

export const action = {
  checkAuth: () => (dispatch) => {
    auth.onAuthStateChanged((user) => {
      dispatch({
        type: CHECK_AUTH,
        payload: {
          user
        },
        meta: {
          isAuthed: user !== null,
          isLoaded: true
        }
      });
    });
  },
  getUserInfo: () => (dispatch) => {
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
  },
  getMemo: () => (dispatch) => {
    db.collection('users').get()
      .then((snapshot) => {
        dispatch({
          type: GET_MEMO,
          payload: {
            memo: snapshot.docs[0].data().name
          }
        });
      });
  },
  tryLogin: (email, password) => (dispatch) => {
    auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        dispatch({
          type: CHECK_AUTH,
          payload: {
            user
          },
          meta: {
            isAuthed: true,
            isLoaded: true
          }
        });
      });
  }
};
