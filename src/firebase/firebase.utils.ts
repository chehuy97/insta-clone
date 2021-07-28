import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmxTMw0iX0FeVXVif50xTgUnaXD_DwT-M",
  authDomain: "login-facebook-demo-165e0.firebaseapp.com",
  projectId: "login-facebook-demo-165e0",
  storageBucket: "login-facebook-demo-165e0.appspot.com",
  messagingSenderId: "721810168244",
  appId: "1:721810168244:web:fb64d72e5b26a05b897ae1",
  measurementId: "G-VRJH32P0B0",
};

firebase.initializeApp(firebaseConfig);

export default firebase;

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.FacebookAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'})
console.log('haha');
//   provider.addScope('user_birthday');
//   firebase.auth().languageCode = 'it';
//   provider.setCustomParameters({
//     'display': 'popup'
//   });
export const siginInWithFacebookMethod = (callback: () => void) => {
  console.log("signin with fb");

  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      console.log("SUCCESS");
      var credential = result.credential as firebase.auth.OAuthCredential;

      var user = result.user;

      var accessToken = credential.accessToken;
    console.log(result);
    
      callback();

      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      console.log(errorMessage);

      // ...
    });
};
