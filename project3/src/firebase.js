import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";

//firebase config for Daichi
var firebaseConfig_Daichi = {
    apiKey: "AIzaSyAN7dAq-DCc_9ac6oQJmF8Jfx3couphkzU",
    authDomain: "proj3-993d9.firebaseapp.com",
    databaseURL: "https://proj3-993d9.firebaseio.com",
    projectId: "proj3-993d9",
    storageBucket: "proj3-993d9.appspot.com",
    messagingSenderId: "204103118226",
    appId: "1:204103118226:web:9b713ec8aa37ad3deb254b",
    measurementId: "G-N8MW45J56F"
};


// Your web app's Firebase configuration
// var firebaseConfig_Ed = {
//   apiKey: "AIzaSyBfYCq4nqGJ-kJAx0FMrVP2OBZmWYjJes4",
//   authDomain: "otterfeed-9f96f.firebaseapp.com",
//   databaseURL: "https://otterfeed-9f96f.firebaseio.com",
//   projectId: "otterfeed-9f96f",
//   storageBucket: "otterfeed-9f96f.appspot.com",
//   messagingSenderId: "858532208100",
//   appId: "1:858532208100:web:26a17cc46ab13789857bf1",
//   measurementId: "G-XYPVBS5JD7"
// };

export const firebaseApp = firebase.initializeApp(firebaseConfig_Daichi);

// why do we need both of the 2 following lines?
const baseDB = firebaseApp.firestore();
export const db = baseDB;

export const userRef = firebaseApp.database().ref('users');

export const postRef = firebaseApp.database().ref('posts');