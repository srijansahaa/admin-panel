import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCmMKF8l8ssD0k87pNzA3R48Vm_JQjmQ0I",
    authDomain: "portfolio-2ad35.firebaseapp.com",
    databaseURL: "https://portfolio-2ad35-default-rtdb.firebaseio.com",
    projectId: "portfolio-2ad35",
    storageBucket: "portfolio-2ad35.appspot.com",
    messagingSenderId: "119938160394",
    appId: "1:119938160394:web:4aaef0884e26e6394a4cf3",
    measurementId: "G-RL6PGNH2ZX"
});

var db = firebaseApp.firestore();

export { db }