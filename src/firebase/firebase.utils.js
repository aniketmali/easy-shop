import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBArxfgegDiIl4pUJ5WhMAp3fnQWWIq7MY",
    authDomain: "easy-shop-db.firebaseapp.com",
    databaseURL: "https://easy-shop-db.firebaseio.com",
    projectId: "easy-shop-db",
    storageBucket: "easy-shop-db.appspot.com",
    messagingSenderId: "805539529635",
    appId: "1:805539529635:web:efd92c9d855c7b83925016",
    measurementId: "G-4PQVYBDZS3"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export const createUserProfileDocument = async(userAuth, additionalData) =>{
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
      const {displayName,email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
        
      } catch (error) {
        console.log('error while creating user ',error.message);
      }
    }

    return userRef;
  };

  export default firebase;


