import firebase from 'firebase';
import '@firebase/firestore';

const config = {
  apiKey: "XXXXXXXXXXXXX-XXXXX-XXXXXXXXXXXXXXXXXXX",
  authDomain: "react-redux-pwa-template.firebaseapp.com",
  databaseURL: "https://react-redux-pwa-template.firebaseio.com",
  projectId: "react-redux-pwa-template",
  storageBucket: "react-redux-pwa-template.appspot.com",
  messagingSenderId: "999999999999"
};
const app = firebase.initializeApp(config);

export const db = app.firestore();
