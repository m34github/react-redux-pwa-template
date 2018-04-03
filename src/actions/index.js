import axios from 'axios';

import {
  auth,
  db
} from '../commons/firebase.config';

export const CHECK_AUTH = 'CHECK_AUTH';
export const GET_USER_INFO = 'GET_USER_INFO';
export const READ_MEMO = 'READ_MEMO';

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
      })
      .catch((err) => {
        console.error('error:', err); // eslint-disable-line
      });
  },
  readMemo: () => (dispatch) => {
    db.collection('users')
      .onSnapshot((snapshot) => {
        dispatch({
          type: READ_MEMO,
          payload: {
            memo: snapshot.docs[0].data().memo
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
      })
      .catch((err) => {
        console.error('error:', err); // eslint-disable-line
      });
  },
  tryLogout: () => () => {
    auth.signOut()
      .then(() => {
        console.log('signed out'); // eslint-disable-line
      })
      .catch((err) => {
        console.error('error:', err); // eslint-disable-line
      });
  },
  writeMemo: (uid, memo) => () => {
    db.collection('users')
      .where('uid', '==', uid)
      .get()
      .then((snapshot) => {
        db.collection('users')
          .doc(snapshot.docs[0].id)
          .update({
            memo: snapshot.docs[0].data().memo.concat([memo])
          });
      })
      .catch((err) => {
        console.error('error:', err); // eslint-disable-line
      });
  }
};
