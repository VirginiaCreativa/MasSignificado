import firebase from '@firebase/app';
import '@firebase/firestore';
import '@firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyC-cjIBzPUTIPzPKU08Xcg6OMVNYeAgyjI',
  authDomain: 'mas-significado.firebaseapp.com',
  databaseURL: 'https://mas-significado.firebaseio.com',
  projectId: 'mas-significado',
  storageBucket: 'mas-significado.appspot.com',
  messagingSenderId: '803891648189',
  appId: '1:803891648189:web:7b07354086e4c6e02609d4',
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
