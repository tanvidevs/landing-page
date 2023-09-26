import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB63uL_7XpKPaTq3MGeq94EfcI5AGK2CVo",
  authDomain: "fukat-f73b6.firebaseapp.com",
  projectId: "fukat-f73b6",
  storageBucket: "fukat-f73b6.appspot.com",
  messagingSenderId: "404443406855",
  appId: "1:404443406855:web:0a3a05229132d7d06700a2"
};

if (!firebase.app.lenth) {
    firebase.initializeApp(firebaseConfig);
  }
  
  export const firestore = firebase.firestore();