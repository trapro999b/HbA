import * as firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyCX1asPATIFrmihW7eQrda5jxZLdt-4EjE",
    authDomain: "heartbeatalarm-7c146.firebaseapp.com",
    databaseURL: "https://heartbeatalarm-7c146-default-rtdb.firebaseio.com",
    projectId: "heartbeatalarm-7c146",
    storageBucket: "heartbeatalarm-7c146.appspot.com",
    messagingSenderId: "656238489703",
    appId: "1:656238489703:web:be704289f5dfe63e8124c2",
    measurementId: "G-JZTTPJBG2K"
  };
export const firebaseApp = firebase.initializeApp(firebaseConfig)