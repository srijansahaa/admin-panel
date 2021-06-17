import firebase from 'firebase';
import "firebase/auth"

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDRn9pKYsH96Vme-baKig-KH_NN5G-7PrU",
    authDomain: "admin-dde1a.firebaseapp.com",
    projectId: "admin-dde1a",
    storageBucket: "admin-dde1a.appspot.com",
    messagingSenderId: "46760299329",
    appId: "1:46760299329:web:441f43dcc1955809606fc0"
});

var db = firebaseApp.firestore();

// export const auth = firebase.auth(); 
// export const googleProvider = new firebase.auth.GoogleAuthProvider()

// export const signInWithGoogle = () => {
//     auth.signInWithPopup(googleProvider).then((res) => {
//         console.log(res.user)
//     }).catch((error) => {
//         console.log(error.message)
//     })
// }

export default firebaseApp;

export { db }